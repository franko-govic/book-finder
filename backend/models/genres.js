const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genres', {
    genre_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    genre_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "genre_name"
    }
  }, {
    sequelize,
    tableName: 'genres',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
      {
        name: "genre_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "genre_name" },
        ]
      },
    ]
  });
};
