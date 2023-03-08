const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name : {
            type : String
        },
        lastName: {
            type: String
        },
        age : {
            type: Number
        },
        phone:{
            type:Number
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;