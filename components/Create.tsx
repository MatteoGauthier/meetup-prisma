import React, { useCallback } from "react"

import { toast } from "react-hot-toast"

type Props = {}

export default function Create({}: Props) {
  const handleClick = useCallback(async (type: "posts" | "authors") => {
    const result = await fetch(`/api/post?type=${type}`, {
      method: "POST",
    })

    if (result.ok) {
      toast.success(`Fake ${type} created`)
    } else {
      toast.error("Something went wrong")
    }
  }, [])

  return (
    <div className="flex flex-col space-y-2 p-4 rounded-md m-6 bg-white shadow-xl">
      <h2 className="text-black text-xl font-bold">Create Post</h2>
      <hr />
      <button className="py-4 font-medium text-white bg-sky-400 hover:opacity-80" onClick={() => handleClick("posts")}>
        Create 5 new posts
      </button>
      <button
        className="py-4 font-medium text-white bg-purple-400 hover:opacity-80"
        onClick={() => handleClick("authors")}
      >
        Create 5 new authors
      </button>
    </div>
  )
}
