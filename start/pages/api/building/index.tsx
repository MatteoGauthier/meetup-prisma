import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { mockedData } from "../../../lib/mocked-data"
import { Building } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body

  switch (req.method) {
    case "GET":
      const result: Building[] = mockedData.buildings
      return res.json(result)

    case "POST":
      const newPost: Building = {
        id: nanoid(),
        name,
      }

      return res.json(newPost)

    default:
      return res.status(401).json({
        error: "Method not allowed",
      })
  }
}
