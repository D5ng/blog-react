import { Router } from "express"

const postRoutes = Router()

import Post from "../models/post-model"

/**
 * Get [id] post
 * Get posts
 * Post [id] post
 * patch [id] post
 * delete [id] post
 */

postRoutes.get("/", async (req, res, next) => {
  const post = await Post.find({})

  res.json({ message: "one post", post })
})

postRoutes.get("/:id", async (req, res, next) => {
  const id = req.params.id!
  const post = await Post.findById(id)

  res.json({ message: "many posts", post })
})

postRoutes.post("/", async (req, res, next) => {
  const newPost = Post.create(req.body)

  res.json({ message: "Create Post", post: newPost })
})

postRoutes.patch("/:id", async (req, res, next) => {
  const id = req.params.id!
  const post = await Post.findByIdAndUpdate(id)

  res.json({ message: "Update Post", post })
})

postRoutes.delete("/:id", async (req, res, next) => {
  const id = req.params.id!
  const post = await Post.findByIdAndDelete(id)

  res.json({ message: "Delete Post", post })
})

export default postRoutes
