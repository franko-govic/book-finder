var DataTypes = require("sequelize").DataTypes;
var _books = require("./books");
var _floor = require("./floor");
var _section = require("./section");
var _shelf = require("./shelf");

function initModels(sequelize) {
  var books = _books(sequelize, DataTypes);
  var floor = _floor(sequelize, DataTypes);
  var section = _section(sequelize, DataTypes);
  var shelf = _shelf(sequelize, DataTypes);

  section.belongsTo(floor, { as: "floor", foreignKey: "floor_id" });
  floor.hasMany(section, { as: "sections", foreignKey: "floor_id" });
  shelf.belongsTo(section, { as: "section", foreignKey: "section_id" });
  section.hasMany(shelf, { as: "shelves", foreignKey: "section_id" });
  books.belongsTo(shelf, { as: "shelf", foreignKey: "shelf_id" });
  shelf.hasMany(books, { as: "books", foreignKey: "shelf_id" });

  return {
    books,
    floor,
    section,
    shelf,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
