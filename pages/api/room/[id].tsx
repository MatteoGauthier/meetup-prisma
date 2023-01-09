import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { mockedData } from "../../../lib/mocked-data"
import { cleanObject } from "../../../lib/utils"
import { Room } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, surface, isAvailable, color, description, building } = req.body
  const roomId = req.query.id

  switch (req.method) {
    case "GET":
      const result: Room = mockedData.rooms[0]
      return res.json(result)

    case "PUT":
      const updatedRoom: Room = cleanObject({
        id: roomId as string,
        isAvailable,
        name,
        surface,
        color,
        description,
        building,
      })

      console.log(`PUT /api/room/${roomId}`, updatedRoom)

      return res.json(updatedRoom)

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
