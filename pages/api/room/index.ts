import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { mockedData } from "../../../lib/mocked-data"
import { Room } from "../../../types"

import { shake } from "radash"
import { cleanObject } from "../../../lib/utils"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, surface, color, description, isAvailable, building } = req.body

  switch (req.method) {
    case "GET":
      const result: Room[] = mockedData.rooms
      return res.json(result)

    case "POST":
      const newPost: Room = cleanObject({
        id: nanoid(),
        isAvailable,
        name,
        surface,
        color,
        description,
        building,
      })

      console.log("POST /api/room", newPost)

      return res.json(newPost)

    default:
      return res.status(401).json({
        error: "Method not allowed",
      })
  }
}
