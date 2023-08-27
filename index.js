import express from "express";
import cors from "cors";
import winston from "winston";
import ownersRouter from "./routes/owner.route.js";
import petsRouter from "./routes/pet.route.js";
import servicesRouter from "./routes/service.route.js";
import postsRouter from "./routes/post.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/petshop-api.log",
    }),
  ],
  format: combine(label({ label: "petshop-api" }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/owner", ownersRouter);
app.use("/pet", petsRouter);
app.use("/service", servicesRouter);
app.use("/post", postsRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API Started"));
