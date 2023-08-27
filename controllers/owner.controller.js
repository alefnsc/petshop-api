import OwnerService from "../services/owner.service.js";

async function createOwner(req, res, next) {
  try {
    let owner = req.body;
    const requiredFields = ["nome", "telefone"];
    for (const field of requiredFields) {
      if (!owner[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    res.send(await OwnerService.createOwner(owner));
    logger.info(`POST /owner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function getOwners(req, res, next) {
  try {
    const owners = await OwnerService.getOwners();
    res.send(owners);
    logger.info(`GET /owner - ${JSON.stringify(owners)}`);
  } catch (err) {
    next(err);
  }
}

async function getOwner(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const owner = await OwnerService.getOwner(id);
    res.send(owner);
    logger.info(`GET /owner/:id - ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updateOwner(req, res, next) {
  try {
    let owner = req.body;
    const requiredFields = ["proprietarioId", "nome", "telefone"];
    for (const field of requiredFields) {
      if (!owner[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    res.send(await OwnerService.updateOwner(owner));
    logger.info(`PUT /owner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteOwner(req, res, next) {
  try {
    await OwnerService.deleteOwner(req.params.id);
    logger.info(`DELETE /owner/:id - ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
