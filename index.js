
const express = require("express");
const fs = require("fs");
const tgjs = require("tigergraph.js");
const cred = require("./config.js")


let conn = new tgjs.createTigerGraphConnection("test.i.tgcloud.io", "MyGraph", "tigergraph", "tigergraph", cred.password, cred.token)
const app = express();

app.get('/', (req, res) => {
    fs.readFile("Frontend/index.html", "utf-8", function (err, data) {
        if (err) throw err;
        res.send(data);
    });
});

app.get('/make_query', (req, res) => {
    console.log("Sent!");
    console.log(req.headers["param"]);
    conn.runQuery("allConnection", {p: req.headers["param"]}, (data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log("http://localhost:3000/");
});