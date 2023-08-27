import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;
    const requiredFields = ["titulo", "conteudo"];
    for (const field of requiredFields) {
      if (!post[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    res.send(await PostService.createPost(post));
    logger.info(`POST /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    const posts = await PostService.getPosts();
    res.send(posts);
    logger.info(`GET /post - ${JSON.stringify(posts)}`);
  } catch (err) {
    next(err);
  }
}

async function createComment(req, res, next) {
  try {
    let comment = req.body;
    const requiredFields = ["id", "nome", "conteudo"];
    for (const field of requiredFields) {
      if (!comment[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    res.send(await PostService.createComment(comment));
    logger.info(`POST /post - ${JSON.stringify(comment)}`);
  } catch (err) {
    next(err);
  }
}

export default { createPost, getPosts, createComment };
