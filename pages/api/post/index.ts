import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { Post } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, color } = req.body
  const result: Post = {
    id: nanoid(),
    title,
    author,
    color,
  }
  res.json(result)
}
