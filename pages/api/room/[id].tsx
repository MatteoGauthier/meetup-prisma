import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  const roomId = req.query.id

  switch (req.method) {
    case "GET":
      const result = await prisma.room.findUnique({
        where: {
          id: roomId as string,
        },
      })
      return res.json(result)

    case "PATCH":
      console.log(body)
      const updatedRoom = await prisma.room.update({
        where: {
          id: roomId as string,
        },
        data: {
          description: body.description,
          name: body.name,
          surface: body.surface,
          color: body.color,
          building: {
            connect: {
              id: body.buildingId,
            },
          },
        },
      })

      console.log(`PATCH /api/room/${roomId}`, updatedRoom)

      return res.json(updatedRoom)

    case "DELETE":
      return res.json({
        message: "Post deleted",
      })

    default:
      return res.status(401).json({
        error: "Method not allowed",
      })
  }
}
