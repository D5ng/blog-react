import { Router } from "express"
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post-controllers"

const postRoutes = Router()

/**
 * Get [id] post
 * Get posts
 * Post [id] post
 * patch [id] post
 * delete [id] post
 */

postRoutes.get("/", getPost)

postRoutes.get("/:id", getPosts)

postRoutes.post("/", createPost)

postRoutes.patch("/:id", updatePost)

postRoutes.delete("/:id", deletePost)

export default postRoutes
