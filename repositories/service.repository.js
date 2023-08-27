import Service from "../models/service.model.js";

async function insertService(service) {
  try {
    return await Service.create(service);
  } catch (err) {
    throw err;
  }
}

async function getServices() {
  try {
    return await Service.findAll();
  } catch (err) {
    throw err;
  }
}

async function getPetServicesByPetIds(petIds) {
  try {
    return await Service.findAll({
      where: {
        animalId: petIds,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertService,
  getServices,
  getPetServicesByPetIds,
};
