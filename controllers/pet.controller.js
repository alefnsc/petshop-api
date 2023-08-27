import PetService from "../services/pet.service.js";

async function createPet(req, res, next) {
  try {
    let pet = req.body;
    const requiredFields = ["nome", "tipo", "proprietarioId"];
    for (const field of requiredFields) {
      if (!pet[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    res.send(await PetService.createPet(pet));
    logger.info(`POST /pet - ${JSON.stringify(pet)}`);
  } catch (err) {
    next(err);
  }
}

async function getPets(req, res, next) {
  try {
    let pets;
    const owner_id = req.query.owner_id;
    if (owner_id) {
      pets = await PetService.getOwnerPets(owner_id);
      console.log(pets);
      if (pets <= 0) throw new Error("The requested owner don't have pets");
    } else {
      pets = await PetService.getPets();
    }
    res.send(pets);
    logger.info(`GET /pet - ${JSON.stringify(pets)}`);
  } catch (err) {
    next(err);
  }
}

async function getPet(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const pet = await PetService.getPet(id);
    res.send(pet);
    logger.info(`GET /pet/:id - ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updatePet(req, res, next) {
  try {
    let pet = req.body;
    const requiredFields = ["animalId", "nome", "tipo", "proprietarioId"];
    for (const field of requiredFields) {
      if (!pet[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    res.send(await PetService.updatePet(pet));
    logger.info(`PUT /pet - ${JSON.stringify(pet)}`);
  } catch (err) {
    next(err);
  }
}

async function deletePet(req, res, next) {
  try {
    await PetService.deletePet(req.params.id);
    res.send();
    logger.info(`DELETE /pet/:id - ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
};
