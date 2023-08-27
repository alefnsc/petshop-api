import ServiceService from "../services/service.service.js";
import OwnerRepository from "../repositories/owner.repository.js";
import PetRepository from "../repositories/pet.repository.js";

async function createService(req, res, next) {
  try {
    let service = req.body;
    const requiredFields = ["descricao", "valor", "animalId"];
    for (const field of requiredFields) {
      if (!service[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    const pet = await PetRepository.getPet(service.animalId);
    if (!pet)
      throw new Error(
        "The pet you're trying to create a service doesn't exist"
      );
    else {
      res.send(await ServiceService.createService(service));
    }
    logger.info(`POST /service - ${JSON.stringify(service)}`);
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    let services;
    const owner_id = req.query.proprietarioId;
    if (owner_id) {
      const owner = await OwnerRepository.getOwner(owner_id);
      if (owner.length <= 0)
        throw new Error("The requested owner doesn't exist");
      else {
        const pets = await PetRepository.getOwnerPets(owner_id);
        if (pets.length <= 0)
          throw new Error("The requested owner doesn't have pets");
        else {
          services = await ServiceService.getServicesByPets(pets);
        }
      }
    } else {
      services = await ServiceService.getServices();
    }
    res.send(services);
    logger.info(`GET /service - ${JSON.stringify(services)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createService,
  getServices,
};
