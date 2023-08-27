import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://eifdpcuj:rQ8SHP8edoq86_zP1iwqc0QEtYzLOQtk@motty.db.elephantsql.com/eifdpcuj",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
