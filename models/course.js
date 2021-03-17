"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Type, {
        foreignKey: "id_type",
      });
      this.belongsTo(models.Location, {
        foreignKey: "id_location",
      });
      this.belongsTo(models.Technology, {
        foreignKey: "id_technology",
      });
    }
  }
  Course.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      imageTitle: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.JSON,
      },
      tuition_number: {
        type: DataTypes.TEXT,
      },
      expect_opening: {
        type: DataTypes.TEXT,
      },
      study_time: {
        type: DataTypes.TEXT,
      },
      is_show: {
        type: DataTypes.BOOLEAN,
      },
      id_location: {
        type: DataTypes.UUID,
        references: {
          model: "Location",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_type: {
        type: DataTypes.UUID,
        references: {
          model: "Type",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_technology: {
        type: DataTypes.UUID,
        references: {
          model: "Technology",
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
      modelName: "Course",
    }
  );
  return Course;
};
