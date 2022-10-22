const express = require("express");
const router = express.Router();

const {
    register,
    login,
    update,
    show,
    index,
    logout,
} = require("../controllers/UserController");

router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
