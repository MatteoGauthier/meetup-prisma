import React from "react"
import { Post } from "../types"
import PostItem from "./PostItem"

type Props = {
  items: Post[]
}

export default function List({ items }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      {items.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </div>
  )
}
