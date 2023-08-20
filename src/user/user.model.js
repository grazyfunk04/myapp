const mongoose = require('mongoose')
const user = require('.')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:String,
    bilingID:String,
    plan:{type:String, enum:['none', 'basic', 'pro'], default:'none'},
    endDate: {type:Date, default:null}
})

const userModel = mongoose.model('user', userSchema, 'user')

module.exports = userModel