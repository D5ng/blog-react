import { RequestHandler } from "express"
import PostService from "../service/post-service"

const postService = new PostService()

export const getPost: RequestHandler = async (req, res, next) => {
  const userId = req.params.id
  const post = postService.getPost(userId)
  res.json({ message: "one post", post })
}

export const getPosts: RequestHandler = async (req, res, next) => {
  const post = postService.getPosts()
  res.json({ message: "many posts", post })
}

export const createPost: RequestHandler = async (req, res, next) => {
  const postData = req.body
  const post = postService.create(postData)

  res.json({ message: "Create Post", post })
}

export const updatePost: RequestHandler = async (req, res, next) => {
  const userId = req.params.id
  const postData = req.body
  const post = postService.update(userId, postData)

  res.json({ message: "Update Post", post })
}

export const deletePost: RequestHandler = async (req, res, next) => {
  const userId = req.params.id!
  const post = postService.delete(userId)

  res.json({ message: "Delete Post", post })
}
