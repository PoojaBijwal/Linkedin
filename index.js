const express = require("express")
const {connection} = require("./config/db")
const {userRouter} = require("./routes/All.routes")
const cors = require("cors");



const app = express()
app.use(cors())
app.use(express.json())
app.use("/",userRouter)


app.listen(8080, async()=>{

    try {
       await connection
       console.log("Connected to DB")
    } catch (error) {
        console.log(error.message)
    }
    console.log("Server is running at port 8080")
})