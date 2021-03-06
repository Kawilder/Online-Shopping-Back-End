const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // tag_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model:'tag',
    //     kry: 'id',
    //   },
    // },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'product',
        kry: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  },
);

module.exports = ProductTag;
