import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body

  switch (req.method) {
    case "GET":
      const result = await prisma.building.findMany()
      return res.json(result)

    case "POST":
      const newPost = await prisma.building.create({
        data: {
          name: name,
        },
      })

      return res.json(newPost)

    default:
      return res.status(401).json({
        error: "Method not allowed",
      })
  }
}
