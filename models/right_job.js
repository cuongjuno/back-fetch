"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Right_Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Right, {
        foreignKey: "id_right",
      });
      this.belongsTo(models.Job, {
        foreignKey: "id_job",
      });
    }
  }
  Right_Job.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      id_job: {
        type: DataTypes.UUID,
        references: {
          model: "Job",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_right: {
        type: DataTypes.UUID,
        references: {
          model: "Right",
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
      modelName: "Right_Job",
    }
  );
  return Right_Job;
};
