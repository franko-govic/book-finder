const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    book_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false,
      unique: "isbn"
    },
    year_published: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cover_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shelf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shelf',
        key: 'shelf_id'
      }
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    barcode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "barcode"
    },
    category: {
      type: DataTypes.ENUM('Fiction','Non-fiction','Mystery','Sci-Fi','Romance','Biography'),
      allowNull: false
    },
    genre: {
      type: DataTypes.ENUM('Thriller','Fantasy','Historical','Adventure','Horror'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'books',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
      {
        name: "isbn",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "isbn" },
        ]
      },
      {
        name: "barcode",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "barcode" },
        ]
      },
      {
        name: "shelf_id",
        using: "BTREE",
        fields: [
          { name: "shelf_id" },
        ]
      },
    ]
  });
};
