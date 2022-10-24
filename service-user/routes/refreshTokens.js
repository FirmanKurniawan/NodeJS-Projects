const express = require("express");
const router = express.Router();

const { store, getToken } = require("../controllers/RefreshTokenController");

router.post("/", store);
router.get("/", getToken);

module.exports = router;
