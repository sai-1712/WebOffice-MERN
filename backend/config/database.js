const mongoose = require("mongoose");
exports.dbconnection = () => {
    mongoose
        .connect("mongodb://localhost:27017/React", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connection to MONGODB successful");
        })
        .catch((err) => {
            console.log(err);
        });
};
