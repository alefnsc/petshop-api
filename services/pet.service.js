import PetRepository from "../repositories/pet.repository.js";

async function createPet(pet) {
  return await PetRepository.insertPet(pet);
}

async function getPets() {
  return await PetRepository.getPets();
}

async function getPet(id) {
  return await PetRepository.getPet(id);
}

async function updatePet(pet) {
  return await PetRepository.updatePet(pet);
}

async function deletePet(id) {
  return await PetRepository.deletePet(id);
}

async function getOwnerPets(owner_id) {
  return await PetRepository.getOwnerPets(owner_id);
}

export default {
  createPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
  getOwnerPets,
};
