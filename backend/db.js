const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/notebook";

const connectToMongo = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
module.exports = connectToMongo;
