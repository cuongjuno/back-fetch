"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Course, {
        foreignKey: "id_course",
      });
    }
  }
  Student.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      sex: {
        type: DataTypes.BOOLEAN,
      },
      school: {
        type: DataTypes.STRING,
      },
      faculty: {
        type: DataTypes.STRING,
      },
      graduation_year: {
        type: DataTypes.STRING,
      },
      score: {
        type: DataTypes.STRING,
      },
      id_course: {
        type: DataTypes.UUID,
        references: {
          model: "Course",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
