// routes/sectionRoutes.js
const express = require("express");
const router = express.Router();
const sectionController = require("../controllers/sectionController");

router.post("/", sectionController.addNewSection);
router.get("/", sectionController.getAllSections);
router.get("/:id", sectionController.getSectionById);
router.put("/:id", sectionController.updateSection);
router.delete("/:id", sectionController.deleteSection);
router.get("/floor/:floor_id", sectionController.getSectionsByFloorId);

module.exports = router;
