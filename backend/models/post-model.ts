import { Schema, model } from "mongoose"

/**
 * ! Post
 * ? title
 * ? desc
 * ? contents
 * ? date
 * ? category
 * * image?
 */

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    contents: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
)

const Post = model("Post", postSchema)

export default Post
