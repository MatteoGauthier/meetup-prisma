import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { mockedData } from "../../../lib/mocked-data"
import { Room } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, surface, isAvailable, color, description, building } = req.body
  const postId = req.query.id

  switch (req.method) {
    case "GET":
      const result: Room = mockedData.rooms[0]
      return res.json(result)

    case "PUT":
      const updatedPost: Room = {
        id: postId as string,
        isAvailable,
        name,
        surface,
        color,
        description,
        building,
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
