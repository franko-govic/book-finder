const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subsection', {
    subsection_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'section',
        key: 'section_id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'subsection',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subsection_id" },
        ]
      },
      {
        name: "section_id",
        using: "BTREE",
        fields: [
          { name: "section_id" },
        ]
      },
    ]
  });
};
