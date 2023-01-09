import { nanoid } from "nanoid"
import type { NextApiRequest, NextApiResponse } from "next"
import { Post } from "../../../types"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, color } = req.body

  switch (req.method) {
    case "GET":
      const result: Post[] = [
        {
          id: "A1PWaDZ08Pkxr4OpINAAM",
          title: "How to use OneSignal on a React Native app",
          author: "OneSignal",
          color: "#e1d2ff",
        },
        {
          id: "j0jrvYvsgkaa9-iyjIoAb",
          title: 'Advices for a good "About me" page',
          author: "Jack",
          color: "#baf1ba",
        },
      ]
      return res.json(result)

    case "POST":
      const newPost: Post = {
        id: nanoid(),
        title,
        author,
        color,
      }

      return res.json(newPost)

    default:
      return res.json({
        error: "Method not allowed",
      })
  }
}
