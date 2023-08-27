import express from "express";
import PetController from "../controllers/pet.controller.js";

const router = express.Router();

router.post("/", PetController.createPet);
router.get("/", PetController.getPets);
router.get("/:id", PetController.getPet);
router.put("/", PetController.updatePet);
router.delete("/:id", PetController.deletePet);

export default router;
