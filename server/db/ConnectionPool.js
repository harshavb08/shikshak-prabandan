const mongoose = require("mongoose");

let connection=null;

const connectToMongoDb = () => {
    mongoose
        .connect(
            `mongodb+srv://sih2022:sih2022@cluster0.wmwjpa5.mongodb.net/test`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("CONNECTED TO MONGODB");
            clearTimeout(connection);
        })
        .catch((err) => {
            console.log(err);
            console.log("reconnecting mongodb ...");
            connection = setTimeout(connectToMongoDb, 5000);
        });
}

connectToMongoDb();