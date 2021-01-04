const db = require("../models");

module.exports = (app) => {

    app.post("/api/books", (req, res) => {
        // console.log(res);
        db.Book.create(req.body).then(result => {
            res.json(result);
            console.log("book added successfully");
        }).catch(err => {
            console.log(err);
        })
    });

    app.get("/favorites", (req, res) => {
        db.Book.find().then(result => {
            res.json(result)
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
    })
}