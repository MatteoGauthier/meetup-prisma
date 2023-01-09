import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { Post } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, color } = req.body
  const postId = req.query.id

  switch (req.method) {
    case "GET":
      const result: Post = {
        id: "A1PWaDZ08Pkxr4OpINAAM",
        title: "How to use OneSignal on a React Native app",
        author: "OneSignal",
        color: "#e1d2ff",
      }
      return res.json(result)

    case "PUT":
      const updatedPost: Post = {
        id: postId as string,
        title,
        author,
        color,
      }

      return res.json(updatedPost)

    case "DELETE":
      return res.json({
        message: "Post deleted",
      })

    default:
      return res.json({
        error: "Method not allowed",
      })
  }
}
