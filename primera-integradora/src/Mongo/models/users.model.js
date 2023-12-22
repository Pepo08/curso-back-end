const { Schema, model} = require("mongoose")

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    email:{
        type: String,
        required : true,
        unique: true
    },
    atCreated: {
        type: Date,
        default: Date()
    }
})

exports.userModel = model("users", userSchema)




