const tgjs = require("tigergraph.js");
const cred = require("./config.js")


let conn = new tgjs.createTigerGraphConnection("test.i.tgcloud.io", "MyGraph", "tigergraph", "tigergraph", cred.password, cred.token)

conn.runQuery("allConnection", {p: "6015000033"}, (data) => {
    console.log(data[0]);
});

