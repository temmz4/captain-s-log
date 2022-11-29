require("dotenv").config();
const express         = require("express");
const app             = express();
const port            = 3000;
const reactViews      = require("express-react-views");
const mongoose        = require("mongoose");
const Log             = require("./models/logs");
const seedData        = require("./seedData");
const methodOverride  = require("method-override");
const logsController  = require("./controllers/logsController");


const mongoURI = process.env.MONGO_URI;
const database = mongoose.connection;


mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


database.on("error", (error) => console.log(error.message + " MongoDB is not running."));
database.on("open",       () => console.log("MongoDB Connected"));
database.on("close",      () => console.log("MongoDB Disconnected"));


app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());


app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));


app.use("/logs", logsController);


async function seedDatabase() {
    try {
        const seededData = await Log.insertMany(seedData.previousLogs);
        console.log(seededData);
    } catch(error) {
        console.log(error);
    } finally {
        database.close();
    }
}


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});