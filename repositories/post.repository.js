import { getClient } from "./mongo.db.js";
import mongodb from "mongodb";

async function createPost(post) {
  try {
    const client = await getClient();
    await client.connect();
    await client.db("petshop-api").collection("posts").insertOne(post);
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const client = await getClient();
    await client.connect();
    const posts = await client
      .db("petshop-api")
      .collection("posts")
      .find()
      .toArray();
    return posts;
  } catch (err) {
    throw err;
  }
}

async function createComment(comment) {
  const client = await getClient();
  try {
    await client.connect();

    const post = await client
      .db("petshop-api")
      .collection("posts")
      .findOne({
        _id: new mongodb.ObjectId(comment.id),
      });

    if (!post) {
      throw new Error("Post not found.");
    }

    const newComment = {
      nome: comment.nome,
      conteudo: comment.conteudo,
    };

    await postsCollection.updateOne(
      { _id: new mongodb.ObjectId(comment.id) },
      {
        $push: {
          comentario: newComment,
        },
      }
    );
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}
export default { createPost, getPosts, createComment };
