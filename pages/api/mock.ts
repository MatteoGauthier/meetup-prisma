import type { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    switch (req.query.type) {
      case "rooms":
        return res.json({
          message: "Added 5 new fake rooms",
        })

      case "authors":
        return res.json({
          message: "Added 5 new fake authors",
        })

      default:
        return res.status(404)
    }
  }
}
