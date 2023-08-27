import ServiceRepository from "../repositories/service.repository.js";
import PetRepository from "../repositories/pet.repository.js";

async function createService(service) {
  return await ServiceRepository.insertService(service);
}

async function getServices() {
  return await ServiceRepository.getServices();
}

async function getServicesByPets(pets) {
  try {
    const petIds = pets.map((pets) => pets.animalId);
    const services = await ServiceRepository.getPetServicesByPetIds(petIds);
    if (services.length <= 0)
      throw new Error("The pets of requested owner doesn't have services");
    else {
      return services;
    }
  } catch (error) {
    throw error;
  }
}

export default {
  createService,
  getServices,
  getServicesByPets,
};
