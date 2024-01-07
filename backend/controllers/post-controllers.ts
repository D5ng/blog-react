import { RequestHandler } from "express"
import Post from "../models/post-model"

export const getPost: RequestHandler = async (req, res, next) => {
  const post = await Post.find({})

  res.json({ message: "one post", post })
}

export const getPosts: RequestHandler = async (req, res, next) => {
  const id = req.params.id!
  const post = await Post.findById(id)

  res.json({ message: "many posts", post })
}

export const createPost: RequestHandler = async (req, res, next) => {
  const newPost = Post.create(req.body)

  res.json({ message: "Create Post", post: newPost })
}

export const updatePost: RequestHandler = async (req, res, next) => {
  const id = req.params.id!
  const post = await Post.findByIdAndUpdate(id)

  res.json({ message: "Update Post", post })
}

export const deletePost: RequestHandler = async (req, res, next) => {
  const id = req.params.id!
  const post = await Post.findByIdAndDelete(id)

  res.json({ message: "Delete Post", post })
}
