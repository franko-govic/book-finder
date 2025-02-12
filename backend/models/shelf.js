const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shelf', {
    shelf_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'section',
        key: 'section_id'
      }
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
        name: "fk_section_id",
        using: "BTREE",
        fields: [
          { name: "section_id" },
        ]
      },
    ]
  });
};
