var DataTypes = require("sequelize").DataTypes;
var _bookcategories = require("./bookcategories");
var _bookgenres = require("./bookgenres");
var _books = require("./books");
var _categories = require("./categories");
var _copies = require("./copies");
var _floor = require("./floor");
var _genres = require("./genres");
var _section = require("./section");
var _shelf = require("./shelf");
var _subsection = require("./subsection");

function initModels(sequelize) {
  var bookcategories = _bookcategories(sequelize, DataTypes);
  var bookgenres = _bookgenres(sequelize, DataTypes);
  var books = _books(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var copies = _copies(sequelize, DataTypes);
  var floor = _floor(sequelize, DataTypes);
  var genres = _genres(sequelize, DataTypes);
  var section = _section(sequelize, DataTypes);
  var shelf = _shelf(sequelize, DataTypes);
  var subsection = _subsection(sequelize, DataTypes);

  books.belongsToMany(categories, { as: 'category_id_categories', through: bookcategories, foreignKey: "book_id", otherKey: "category_id" });
  books.belongsToMany(genres, { as: 'genre_id_genres', through: bookgenres, foreignKey: "book_id", otherKey: "genre_id" });
  categories.belongsToMany(books, { as: 'book_id_books', through: bookcategories, foreignKey: "category_id", otherKey: "book_id" });
  genres.belongsToMany(books, { as: 'book_id_books_bookgenres', through: bookgenres, foreignKey: "genre_id", otherKey: "book_id" });
  bookcategories.belongsTo(books, { as: "book", foreignKey: "book_id"});
  books.hasMany(bookcategories, { as: "bookcategories", foreignKey: "book_id"});
  bookgenres.belongsTo(books, { as: "book", foreignKey: "book_id"});
  books.hasMany(bookgenres, { as: "bookgenres", foreignKey: "book_id"});
  copies.belongsTo(books, { as: "book", foreignKey: "book_id"});
  books.hasMany(copies, { as: "copies", foreignKey: "book_id"});
  bookcategories.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(bookcategories, { as: "bookcategories", foreignKey: "category_id"});
  section.belongsTo(floor, { as: "floor", foreignKey: "floor_id"});
  floor.hasMany(section, { as: "sections", foreignKey: "floor_id"});
  bookgenres.belongsTo(genres, { as: "genre", foreignKey: "genre_id"});
  genres.hasMany(bookgenres, { as: "bookgenres", foreignKey: "genre_id"});
  subsection.belongsTo(section, { as: "section", foreignKey: "section_id"});
  section.hasMany(subsection, { as: "subsections", foreignKey: "section_id"});
  books.belongsTo(shelf, { as: "shelf", foreignKey: "shelf_id"});
  shelf.hasMany(books, { as: "books", foreignKey: "shelf_id"});
  shelf.belongsTo(subsection, { as: "subsection", foreignKey: "subsection_id"});
  subsection.hasMany(shelf, { as: "shelves", foreignKey: "subsection_id"});

  return {
    bookcategories,
    bookgenres,
    books,
    categories,
    copies,
    floor,
    genres,
    section,
    shelf,
    subsection,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
