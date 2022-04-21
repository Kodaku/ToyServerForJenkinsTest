const { Router } = require("express");
const expres = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.send("User new form");
});

router.post("/", (req, res) => {
    res.send("Creating the user");
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({ resp: {
        id: id
    } });
})

module.exports = router;