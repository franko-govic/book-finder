const { section, shelf } = require("../models");

const sectionController = {
  // Add a new section
  addNewSection: async (req, res) => {
    try {
      const { floor_id, name } = req.body;

      const newSection = await section.create({
        floor_id,
        name,
      });

      // Create 9 shelves for new section

      const shelves = [...Array(9)].map((_, i) => ({
        name: `${newSection.section_id}-${i + 1}`,
        section_id: newSection.section_id,
      }));

      // Bulk create shelves
      await shelf.bulkCreate(shelves);

      res.status(201).json({
        success: true,
        message: "Section added successfully with 9 shelves",
        data: newSection,
      });
    } catch (error) {
      console.error("Error adding section and shelves:", error);
      res.status(500).json({
        success: false,
        message: "Error adding section and shelves",
        error: error.message,
      });
    }
  },

  // Get all sections
  getAllSections: async (req, res) => {
    try {
      const sectionsList = await section.findAll({
        include: [
          {
            model: floor,
            as: "floor",
            attributes: ["floor_id", "name"],
          },
        ],
      });
      res.status(200).json({
        success: true,
        data: sectionsList,
      });
    } catch (error) {
      console.error("Error fetching sections:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching sections",
        error: error.message,
      });
    }
  },

  // Get a single section by its ID
  getSectionById: async (req, res) => {
    const { id } = req.params;

    try {
      const singleSection = await section.findOne({
        where: { section_id: id },
        include: [
          {
            model: floor,
            as: "floor",
            attributes: ["floor_id", "name"],
          },
        ],
      });

      if (!singleSection) {
        return res.status(404).json({
          success: false,
          message: "Section not found",
        });
      }

      res.status(200).json({
        success: true,
        data: singleSection,
      });
    } catch (error) {
      console.error("Error fetching section:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching section",
        error: error.message,
      });
    }
  },

  // Update a section by its ID
  updateSection: async (req, res) => {
    const { id } = req.params;
    const { floor_id, name } = req.body;

    try {
      const sectionToUpdate = await section.findOne({
        where: { section_id: id },
      });

      if (!sectionToUpdate) {
        return res.status(404).json({
          success: false,
          message: "Section not found",
        });
      }

      sectionToUpdate.floor_id = floor_id || sectionToUpdate.floor_id;
      sectionToUpdate.name = name || sectionToUpdate.name;

      await sectionToUpdate.save();

      res.status(200).json({
        success: true,
        message: "Section updated successfully",
        data: sectionToUpdate,
      });
    } catch (error) {
      console.error("Error updating section:", error);
      res.status(500).json({
        success: false,
        message: "Error updating section",
        error: error.message,
      });
    }
  },

  // Delete a section by its ID
  deleteSection: async (req, res) => {
    const { id } = req.params;

    try {
      const sectionToDelete = await section.findOne({
        where: { section_id: id },
      });

      if (!sectionToDelete) {
        return res.status(404).json({
          success: false,
          message: "Section not found",
        });
      }

      await sectionToDelete.destroy();

      res.status(200).json({
        success: true,
        message: "Section deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting section:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting section",
        error: error.message,
      });
    }
  },
};

module.exports = sectionController;
