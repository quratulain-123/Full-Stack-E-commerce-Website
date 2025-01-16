const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = process.env.PORT
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.post("/payment",async(req,res)=>{
console.log(req.body.token);
await stripe.charges.create({
source:req.body.token.id,
amount:req.body.amount,
currency:"usd",
})
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
