import connectDB from "./db/connection.js";
import dotenv from "dotenv";
import app from "./app.js"
dotenv.config({
    path: "./env"
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`App is started on the port no. -> ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Mongo Db connection is failed(index.js) -> ${error}`)
    })