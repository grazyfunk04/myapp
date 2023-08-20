const express = require('express')
const app = express()
const path = require('path')
const collection = require('./mongodb')
const cors = require('cors')
require('dotenv').config()
const subsRoutes = require("./routes/subs.js") ;

app.use(express.json())
app.use(cors({
    origin : "http://localhost:3000"
}))



app.use(express.urlencoded({extended:false}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// app.use("/subs", subsRoutes);
// // app.get("/", cors(), (req, res) => {
// //     res.render("homepage")
// // })

app.post("/",async (req, res)=>{

    const{name,email,password} = req.body

    const data={
        name:name,
        email: email,
        password: password
    }

    
    try{
        const check = await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])

        }
    }
    catch{
        res.json("notexist")
    }
    res.render("homepage")

})

app.post("/login",async (req, res)=>{
    console.log('Login Page')
    const{email,password} = req.body

    try{
        const check = await collection.findOne({email: email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch{
        res.json("notexist")
    }

})

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Mobile" }],
  [2, { priceInCents: 20000, name: "Basic" }],
  [3, { priceInCents: 50000, name: "Standard" }],
  [4, { priceInCents: 70000, name: "Premium" }],
  [5, { priceInCents: 100000, name: "Mobile" }],
  [6, { priceInCents: 200000, name: "Basic" }],
  [7, { priceInCents: 500000, name: "Standard" }],
  [8, { priceInCents: 700000, name: "Premium" }],
])

app.post("/create-checkout-session", async (req, res) => {

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen(8000, () => {
    console.log("Port Connected");
})

