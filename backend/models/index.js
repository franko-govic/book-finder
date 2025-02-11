const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Adjust path to your db.js file
const initModels = require("./init-models"); // Path to your initModels.js file

// Initialize all models and their relationships
const models = initModels(sequelize);

module.exports = models; // Export the initialized models
