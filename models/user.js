"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING(150),
      phone_no: DataTypes.STRING(15),
      role: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      pincode: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: DataTypes.STRING(200),
      created_by: {
        type: DataTypes.BIGINT,
      },
      updated_by: {
        type: DataTypes.BIGINT,
      },
      deleted_by: {
        type: DataTypes.BIGINT,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "User",
      createdAt: "created_at",
      updatedAt: "updated_at",
      tableName: "users",
    }
  );
  return User;
};
