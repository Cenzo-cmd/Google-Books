const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/htmlRoutes");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 8081;
const path = require("path");

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("/*", (request, response) => {
        response.sendFile(path.join(__dirname, "../client/build/index.html"))
    });
}

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});

