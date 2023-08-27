import mongodb from "mongodb";

const uri =
  "mongodb+srv://alexandrefonsecach:pU479XOabQfpWsQi@petshop-api.uugesar.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb.MongoClient(uri);

async function getClient() {
  return client;
}

export { getClient };
