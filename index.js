const path = require("path");
const express = require("express");

const { initModel } = require("./models");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set('views', './views');
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

initModel()
    .then(() => {   
        app.listen(PORT, () => {
            console.log(`Listening app in PORT ${PORT}`);
        });
    })