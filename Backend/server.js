const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
dotenv.config()
mongoose.set('strictQuery', false);
const { Schema } = mongoose

const newSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
},
    { timestamps: true }
)


const Floral = mongoose.model("flowers", newSchema)

// !get product
app.get("/flowers", (req, res) => {
    Floral.find({}, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    })
})

// !get by id
app.get("/flowers/:id", (req, res) => {
    const { id } = req.params
    Floral.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    })
})

//! post data
app.post("/flowers", (req, res) => {
    const newFlowers = new Floral({
        name: req.body.name,
        price: req.body.price,
        url: req.body.url
    })
    newFlowers.save()
    res.send("Post is succefully")
})

//! delete by id
app.delete("/flowers/:id", (req, res) => {
    const { id } = req.params
    Floral.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("delete is successfully")
        }
    })
})


const PORT = process.env.PORT
const DB = process.env.URL.replace("<password>", process.env.Password)
mongoose.connect(DB, () => {
    console.log("Db is connect")
    app.listen(PORT, () => {
        console.log(`SERVER IS UP AND RUNNING ${PORT}`);
    })
})