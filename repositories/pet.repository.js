import Pet from "../models/pet.model.js";
import Owner from "../models/owner.model.js";

async function insertPet(pet) {
  try {
    return await Pet.create(pet);
  } catch (err) {
    throw err;
  }
}

async function getPets() {
  try {
    return await Pet.findAll();
  } catch (err) {
    throw err;
  }
}

async function getPet(id) {
  try {
    return await Pet.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getOwnerPets(owner_id) {
  try {
    return await Pet.findAll({
      where: {
        proprietarioId: owner_id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updatePet(pet) {
  try {
    await Pet.update(pet, {
      where: {
        animalId: pet.animalId,
      },
    });
    return await getPet(pet.animalId);
  } catch (err) {
    throw err;
  }
}

async function deletePet(id) {
  try {
    await Pet.destroy({
      where: {
        animalId: id,
      },
    });
    return await getPets();
  } catch (err) {
    throw err;
  }
}

export default {
  insertPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
  getOwnerPets,
};
