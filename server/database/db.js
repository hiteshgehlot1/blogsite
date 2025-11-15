import mongoose from "mongoose";


const connectDB = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@blogapp.go6jjrc.mongodb.net/?appName=Blogapp` 
    try {
        await mongoose.connect(URL)
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error connecting to database", error);
    }
}
export default connectDB;