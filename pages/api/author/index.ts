import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { Author, Post } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const result: Author[] = [
        {
          id: "HUYpc4edAKEPpp0A-R4r2",
          name: "Jack",
        },
        {
          id: "vSdZTKMgpvZc9O5Xeug8w",
          name: "OneSignal",
        },
      ]
      return res.json(result)

    default:
      return res.json({
        error: "Method not allowed",
      })
  }
}
