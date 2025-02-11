const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('section', {
    section_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    floor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'floor',
        key: 'floor_id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'section',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "section_id" },
        ]
      },
      {
        name: "floor_id",
        using: "BTREE",
        fields: [
          { name: "floor_id" },
        ]
      },
    ]
  });
};
