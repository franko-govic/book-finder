const { floor } = require("../models");

const floorController = {
  // Add a new floor
  addNewFloor: async (req, res) => {
    try {
      const { name } = req.body;

      const newFloor = await floor.create({
        name,
      });

      res.status(201).json({
        success: true,
        message: "Floor added successfully",
        data: newFloor,
      });
    } catch (error) {
      console.error("Error adding floor:", error);
      res.status(500).json({
        success: false,
        message: "Error adding floor",
        error: error.message,
      });
    }
  },

  // Get all floors
  getAllFloors: async (req, res) => {
    try {
      const floorsList = await floor.findAll();
      res.status(200).json({
        success: true,
        data: floorsList,
      });
    } catch (error) {
      console.error("Error fetching floors:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching floors",
        error: error.message,
      });
    }
  },

  // Get a single floor by its ID
  getFloorById: async (req, res) => {
    const { id } = req.params;

    try {
      const foundFloor = await floor.findOne({
        where: { floor_id: id },
      });

      if (!foundFloor) {
        return res.status(404).json({
          success: false,
          message: "Floor not found",
        });
      }

      res.status(200).json({
        success: true,
        data: foundFloor,
      });
    } catch (error) {
      console.error("Error fetching floor:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching floor",
        error: error.message,
      });
    }
  },

  // Update a floor by its ID
  updateFloor: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const floorToUpdate = await floor.findOne({ where: { floor_id: id } });

      if (!floorToUpdate) {
        return res.status(404).json({
          success: false,
          message: "Floor not found",
        });
      }

      floorToUpdate.name = name || floorToUpdate.name;

      await floorToUpdate.save();

      res.status(200).json({
        success: true,
        message: "Floor updated successfully",
        data: floorToUpdate,
      });
    } catch (error) {
      console.error("Error updating floor:", error);
      res.status(500).json({
        success: false,
        message: "Error updating floor",
        error: error.message,
      });
    }
  },

  // Delete a floor by its ID
  deleteFloor: async (req, res) => {
    const { id } = req.params;

    try {
      const floorToDelete = await floor.findOne({ where: { floor_id: id } });

      if (!floorToDelete) {
        return res.status(404).json({
          success: false,
          message: "Floor not found",
        });
      }

      await floorToDelete.destroy();

      res.status(200).json({
        success: true,
        message: "Floor deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting floor:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting floor",
        error: error.message,
      });
    }
  },
};

module.exports = floorController;
