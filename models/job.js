"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
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
      this.belongsTo(models.Place, {
        foreignKey: "id_place",
      });
      this.belongsTo(models.Position, {
        foreignKey: "id_position",
      });
      this.belongsToMany(models.Right, {
        through: 'Right_Job',
        foreignKey: 'id_job',
      });
    }
  }
  Job.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
      },
      salary_range: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
      },
      overview: {
        type: DataTypes.TEXT,
      },
      request: {
        type: DataTypes.TEXT,
      },
      benefits: {
        type: DataTypes.TEXT,
      },
      contact: {
        type: DataTypes.TEXT,
      },
      deadline: {
        type: DataTypes.STRING,
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
      id_place: {
        type: DataTypes.UUID,
        references: {
          model: "Place",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_position: {
        type: DataTypes.UUID,
        references: {
          model: "Position",
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
      modelName: "Job",
    }
  );
  return Job;
};
