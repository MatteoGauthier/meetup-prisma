import { useCallback } from "react"
import { toast } from "react-hot-toast"
import { Author, Post } from "../../types"
import DeleteIcon from "../svg/DeleteIcon"

type Props = Author

const AuthorItem = ({ name }: Props) => {
  return (
    <div className="bg-gray-100 rounded-md justify-between text-black flex items-center">
      <div className="flex items-center space-x-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-10 w-10" src={`https://api.dicebear.com/5.x/initials/svg?seed=${name}`} alt="" />
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          {/* <span className="text-sm text-gray-700">{posts.length} articles</span> */}
        </div>
      </div>
    </div>
  )
}

export default AuthorItem
