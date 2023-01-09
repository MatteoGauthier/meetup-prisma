import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { mockedData } from "../../../lib/mocked-data"
import { Room } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, surface, color, description, isAvailable } = req.body

  switch (req.method) {
    case "GET":
      const result: Room[] = mockedData.rooms
      return res.json(result)

    case "POST":
      const newPost: Room = {
        id: nanoid(),
        isAvailable,
        name,
        surface,
        color,
        description,
      }

      return res.json(newPost)

    default:
      return res.json({
        error: "Method not allowed",
      })
  }
}
