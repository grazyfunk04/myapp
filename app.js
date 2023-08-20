require('dotenv').config()
require('./src/connect/mogodb')
const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
var MemoryStore = require('memorystore')(session)

const UserService = require('./src/user')
const Stripe = require('./src/connect/stripe')
const setCurrentUser = require('./src/middleware/setCurrentUser')
const hasPlan = require('./src/middleware/hasPlan')

const app = express()
app.use(session({
    saveUninitialized:false,
    cookie:{maxAge:86400000}, 
    store: new MemoryStore({
        checkPeriod:86400000
    }),
    resave:false,
    secret:'keyboard cat'
}))

app.use('/webhook', bodyParser.raw({type:'application/json'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)