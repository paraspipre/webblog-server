const mongoose = require('mongoose');
const crypto = require('crypto');
const { threadId } = require('worker_threads');
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            max: 32,
            unique: true,
            index: true,
            lowercase: true
        },
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        profile: {
            type: String,
            required: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String,
        about: {
            type: String
        },
        role: {
            type: Number,
            default:0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        resetPasswordLink: {
            data: String,
            default: ''
        }
    },
    { timestamps: true }
);

userSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = this.makeSalt()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })
    
userSchema.methods = {
    authenticate: function (plainText) {
        return bcrypt.compare(password, user.hashed_password)
    },

    encryptPassword: async function (password) {
        if (!password) return ''
        try {
            const salt = await bcrypt.genSalt(10)

            const hashed_password = await bcrypt.hash(password, salt)
            return hashed_password
            // return crypto
            //     .createHmac('sha1', this.salt)
            //     .update(password)
            // .digest('hex')
        }catch(err){
            return ''
        }
    },

    makeSalt: function () {
        return Math.round(new Date().valueOf * Math.random()) +''
    }
}

module.exports = mongoose.model('User', userSchema);
