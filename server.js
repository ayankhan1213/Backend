import app from "./src/app.js";
import "dotenv/config"
const port = process.env.port
import connectDB from "./src/db/db.js";

connectDB()


app.listen(port , ()=>{
    console.log("Server is running...");
})