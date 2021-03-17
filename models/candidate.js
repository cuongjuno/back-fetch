"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Position, {
        foreignKey: "id_position",
      });
      this.belongsTo(models.Technology, {
        foreignKey: "id_position",
      });
      this.belongsTo(models.Type, {
        foreignKey: "id_type",
      });
      this.belongsTo(models.Job, {
        foreignKey: "id_job",
      });
    }
  }
  Candidate.init(
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
      another_skill: {
        type: DataTypes.STRING,
      },
      language: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
      },
      profiles: {
        type: DataTypes.STRING,
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
      id_type: {
        type: DataTypes.UUID,
        references: {
          model: "Type",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_skill: {
        type: DataTypes.UUID,
        references: {
          model: "Technology",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
      modelName: "Candidate",
    }
  );
  return Candidate;
};
