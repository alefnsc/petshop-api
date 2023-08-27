import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Pet from "./pet.model.js";

const Service = db.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true },
  {
    timestamps: false,
  }
);
Service.belongsTo(Pet, { foreignKey: "animalId" });
export default Service;
