"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {  }
  Product.init(
    {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        unique: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
      },
      brand: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
       
      },
      image_url: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      deleted_at:{
         type:DataTypes.DATE
      },
      created_by: {
        type: DataTypes.BIGINT,
      },
      updated_by: {
        type: DataTypes.BIGINT,
      },
      deleted_by: {
        type: DataTypes.BIGINT,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Product;
};
