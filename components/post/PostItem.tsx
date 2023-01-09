import { useCallback } from "react"
import { toast } from "react-hot-toast"
import { Post } from "../../types"
import DeleteIcon from "../svg/DeleteIcon"

type Props = Post

const PostItem = ({ title, author, color, id }: Props) => {
  const handleDelete = useCallback(async () => {
    const result = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    })

    if (result.ok) {
      toast.success("Post deleted")
    } else {
      toast.error("Something went wrong")
    }
  }, [id])

  return (
    <div className="bg-gray-100 rounded-md justify-between text-black flex items-center">
      <div className="flex items-center space-x-2">
        <div
          className={"h-12 w-12 rounded-md flex items-center justify-center text-xl"}
          style={{ backgroundColor: color || "aquamarine" }}
        >
          #
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-gray-700">{author}</span>
        </div>
      </div>
      <button onClick={handleDelete} className="justify-self-end px-5">
        <DeleteIcon />
      </button>
    </div>
  )
}

export default PostItem
