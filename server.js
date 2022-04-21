const express = require("express");
const userRouter  = require("./routes/users");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //res.status(200).json({ message: "Hi" });
    res.render("index", { text : "world" });
});

app.use("/users", userRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});