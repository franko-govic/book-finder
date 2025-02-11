const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shelf', {
    shelf_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subsection_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subsection',
        key: 'subsection_id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shelf',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shelf_id" },
        ]
      },
      {
        name: "subsection_id",
        using: "BTREE",
        fields: [
          { name: "subsection_id" },
        ]
      },
    ]
  });
};
