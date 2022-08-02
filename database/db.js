import mongoose from "mongoose";


export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@e-commerce-web.2lezv.mongodb.net/e-commerce`;
    try {
        // connecting the database
        await mongoose.connect( URL )
        console.log("Database Connected Successfully...");    
    } catch (error) {
        console.log(`Error while connecting the Database`, error.message);
    }
}

export default Connection;