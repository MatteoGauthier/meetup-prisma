import type { NextApiRequest, NextApiResponse } from "next"

import { prisma } from "../../../lib/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body

  switch (req.method) {
    case "GET":
      const result = await prisma.room.findMany({
        include: {
          building: true,
        },
      })
      return res.json(result)

    case "POST":
      const newPost = await prisma.room.create({
        data: {
          name: body.name,
          description: body.description,
          surface: body.surface,
          color: body.color,
          building: {
            connect: {
              id: body.buildingId,
            },
          },
        },
      })

      console.log("POST /api/room", newPost)

      return res.json(newPost)

    default:
      return res.json({
        error: "Method not allowed",
      })
  }
}
