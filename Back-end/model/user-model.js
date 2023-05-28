const { model, Schema } = require("mongoose")
const UserScheme = new Schema({
    Username: String,
    Email: String,
    Password: String,
});
const UserModel = model("User", UserScheme);
module.exports = UserModel;