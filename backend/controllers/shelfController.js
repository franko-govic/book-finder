const { shelf, section } = require("../models");

const shelfController = {
  // Add a new shelf
  addNewShelf: async (req, res) => {
    try {
      const { name, section_id } = req.body;

      // Create a new shelf
      const newShelf = await shelf.create({
        name,
        section_id,
      });

      res.status(201).json({
        success: true,
        message: "Shelf added successfully",
        data: newShelf,
      });
    } catch (error) {
      console.error("Error adding shelf:", error);
      res.status(500).json({
        success: false,
        message: "Error adding shelf",
        error: error.message,
      });
    }
  },

  // Get all shelves
  getAllShelves: async (req, res) => {
    try {
      const shelvesList = await shelf.findAll({
        include: [
          {
            model: section,
            as: "section",
            attributes: ["section_id", "name"],
          },
        ],
      });

      res.status(200).json({
        success: true,
        data: shelvesList,
      });
    } catch (error) {
      console.error("Error fetching shelves:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching shelves",
        error: error.message,
      });
    }
  },

  // Get a single shelf by its ID
  getShelfById: async (req, res) => {
    const { id } = req.params;

    try {
      const singleShelf = await shelf.findOne({
        where: { shelf_id: id },
        include: [
          {
            model: section,
            as: "section",
            attributes: ["section_id", "name"],
          },
        ],
      });

      if (!singleShelf) {
        return res.status(404).json({
          success: false,
          message: "Shelf not found",
        });
      }

      res.status(200).json({
        success: true,
        data: singleShelf,
      });
    } catch (error) {
      console.error("Error fetching shelf:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching shelf",
        error: error.message,
      });
    }
  },
  getShelvesBySectionId: async (req, res) => {
    const { section_id } = req.params;

    try {
      const shelves = await shelf.findAll({
        where: { section_id },
        include: [
          {
            model: section,
            as: "section",
            attributes: ["section_id", "name"],
          },
        ],
      });

      if (!shelves.length) {
        return res.status(404).json({
          success: false,
          message: "No shelves found for this section",
        });
      }

      res.status(200).json({
        success: true,
        data: shelves || [],
      });
    } catch (error) {
      console.error("Error fetching shelves for section:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching shelves for section",
        error: error.message,
      });
    }
  },

  // Update a shelf by its ID
  updateShelf: async (req, res) => {
    const { id } = req.params;
    const { name, section_id } = req.body;

    try {
      const shelfToUpdate = await shelf.findOne({
        where: { shelf_id: id },
      });

      if (!shelfToUpdate) {
        return res.status(404).json({
          success: false,
          message: "Shelf not found",
        });
      }

      shelfToUpdate.name = name || shelfToUpdate.name;
      shelfToUpdate.section_id = section_id || shelfToUpdate.section_id;

      await shelfToUpdate.save();

      res.status(200).json({
        success: true,
        message: "Shelf updated successfully",
        data: shelfToUpdate,
      });
    } catch (error) {
      console.error("Error updating shelf:", error);
      res.status(500).json({
        success: false,
        message: "Error updating shelf",
        error: error.message,
      });
    }
  },

  // Delete a shelf by its ID
  deleteShelf: async (req, res) => {
    const { id } = req.params;

    try {
      const shelfToDelete = await shelf.findOne({
        where: { shelf_id: id },
      });

      if (!shelfToDelete) {
        return res.status(404).json({
          success: false,
          message: "Shelf not found",
        });
      }

      await shelfToDelete.destroy();

      res.status(200).json({
        success: true,
        message: "Shelf deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting shelf:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting shelf",
        error: error.message,
      });
    }
  },
};

module.exports = shelfController;
