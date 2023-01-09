import React from "react"
import PostItem from "./PostItem"
import useSWR from "swr"
import { Post } from "../../types"
import fetcher from "../../lib/fetcher"

export default function PostList() {
  const { data: items } = useSWR<Post[]>("/api/post", fetcher)

  return (
    <div className="flex flex-col space-y-2 p-4 rounded-md m-6 bg-white shadow-xl">
      <h2 className="text-black text-xl font-bold">Post list</h2>
      {items ? items.map((item) => <PostItem key={item.id} {...item} />) : <div>Loading...</div>}
    </div>
  )
}
