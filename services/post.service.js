import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}

async function createComment(comment) {
  return await PostRepository.createComment(comment);
}

export default { createPost, getPosts, createComment };
