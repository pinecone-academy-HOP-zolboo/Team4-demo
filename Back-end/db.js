const mongoose = require("mongoose");
const dotenv = require("dotenv")
 
dotenv.config();

const uri = process.env.MONGODB_ATLAS_URI || "" ;

const connect = async () => {
    await mongoose.connect(uri);
    console.log("connected");
};
mongoose.set('strictQuery', true);
module.exports = connect;