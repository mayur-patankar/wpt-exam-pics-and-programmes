const express = require("express");
const app = express();
const { addMessage, seeMessage } = require("./sql.js");
app.use(express.json());
const cors = require("cors");
const { add } = require("nodemon/lib/rules");
app.use(cors());

app.get("/seemessage", async (req, res) => {
    const list = await seeMessage();
    res.json(list);
});

app.post("/addmessage", async (req, res) => {
    const me = req.body;
    const list = await addMessage(me);
    res.json(list);
});

app.listen(9248);