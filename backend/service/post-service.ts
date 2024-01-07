import Post from "../models/post-model"

export default class PostService {
  async getPosts() {
    try {
      const post = await Post.find({})
      return post
    } catch (error) {
      return {
        message: "Get Posts Error",
        error,
      }
    }
  }

  async getPost(userId: string) {
    try {
      const post = await Post.findById(userId)
      return post
    } catch (error) {
      return {
        message: "Get Post Error",
        error,
      }
    }
  }

  async create(postToCreate) {
    try {
      const post = new Post(postToCreate)
      await post.save()

      return post
    } catch (error) {
      return {
        message: "Create Error",
        error,
      }
    }
  }

  async update(userId, postToUpdate) {
    try {
      const post = await Post.findByIdAndUpdate(userId, postToUpdate)
      return post
    } catch (error) {
      return {
        message: "Update Post Error",
        error,
      }
    }
  }

  async delete(userId) {
    try {
      const post = await Post.findByIdAndDelete(userId)
      return post
    } catch (error) {
      return {
        message: "Delete Post Error",
        error,
      }
    }
  }
}
