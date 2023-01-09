import React from "react"
import fetcher from "../../lib/fetcher"
import { Author } from "../../types"
import AuthorItem from "./AuthorItem"
import useSWR from "swr"

type Props = {}

export default function AuthorList({}: Props) {
  const { data: items } = useSWR<Author[]>("/api/author", fetcher)

  return (
    <div className="flex flex-col space-y-2 p-4 rounded-md m-6 bg-white shadow-xl">
      <h2 className="text-black text-xl font-bold">Author list</h2>
      {items ? items.map((item) => <AuthorItem key={item.id} {...item} />) : <div>Loading...</div>}
    </div>
  )
}
