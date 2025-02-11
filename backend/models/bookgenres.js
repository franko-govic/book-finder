const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookgenres', {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'books',
        key: 'book_id'
      }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genres',
        key: 'genre_id'
      }
    }
  }, {
    sequelize,
    tableName: 'bookgenres',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_id" },
          { name: "genre_id" },
        ]
      },
      {
        name: "genre_id",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
    ]
  });
};
