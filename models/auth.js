const mongoose = require('mongoose')

let authSchema = mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email: {
        require: true,
        type:String,
        unique:true
    },
    password: {
        require: true,
        type:String,
    }
},{collection:userData})

let model = mongoose.model('userData', authSchema)

module.exports = model