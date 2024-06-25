// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({path: './env'})
// 3rd aproach
// use a diffrent file which is in db folder and then use in  the index file



connectDB()








// ===============================================================================
// 2nd aproach
/*
import express from "express"
const app = express()

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error: ", error)
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error);
    }
})()
*/
// =============================================================================

// 1st aproach
/*
function connectDB(){}

connectDB()

*/