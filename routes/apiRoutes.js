const db = require("../models");

module.exports = (app) => {

    app.post("/api/books", (req, res) => {
        // console.log(res);
        db.Book.create(req.body).then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
        })
    });

    app.get("/favorites", (req, res) => {
        db.Book.find().then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err);
        });
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Book.findOneAndDelete({ "_id": req.params.id }).then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
        })
    })
}
