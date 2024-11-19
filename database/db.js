const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://joeljoyson2427:joel.2427@cluster0.ln30k.mongodb.net/"
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed!", error);
        process.exit(1);
    }
};
module.exports = connectToDB;