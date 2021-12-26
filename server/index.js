require('dotenv').config()
const express = require("express")
const sequelize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

//server test
// app.get('/',(req, res)=>{
//     res.status(200).json({message:"working! "})
// })

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e.message)
    }
}

start()