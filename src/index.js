import { app } from "./app.js"; // Correct import with curly braces
import connectDB from "./db/connection.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`App is started on the port no. -> ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Mongo DB connection failed (index.js) -> ${error}`);
    });
