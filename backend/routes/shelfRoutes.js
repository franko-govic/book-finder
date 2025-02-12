const express = require("express");
const shelfController = require("../controllers/shelfController");

const router = express.Router();

router.post("/", shelfController.addNewShelf);
router.get("/", shelfController.getAllShelves);
router.get("/:id", shelfController.getShelfById);
router.put("/:id", shelfController.updateShelf);
router.delete("/:id", shelfController.deleteShelf);

module.exports = router;
