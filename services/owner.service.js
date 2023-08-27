import OwnerRepository from "../repositories/owner.repository.js";
import PetRepository from "../repositories/pet.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}

async function getOwner(id) {
  return await OwnerRepository.getOwner(id);
}

async function updateOwner(owner) {
  return await OwnerRepository.updateOwner(owner);
}

async function deleteOwner(id) {
  const owner = await OwnerRepository.getOwner(id);
  if (owner) {
    const pet = await PetRepository.getOwnerPets(id);
    if (pet.length > 0) {
      throw new Error("The Owner could not be delete due its existing pets");
    } else {
      return await OwnerRepository.deleteOwner(id);
    }
  } else {
    throw new Error("The Owner requested not exist");
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
