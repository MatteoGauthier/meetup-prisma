import { Post } from "../types"

type Props = Omit<Post, "id">

const PostItem = ({ title, author, color }: Props) => {
  return (
    <div>
      <div
        className={"h-6 w-6 rounded-md flex items-center justify-center"}
        style={{ backgroundColor: color || "aquamarine" }}
      >
        #
      </div>
      <div>
        <span>{title}</span>
        <span>{author}</span>
      </div>
    </div>
  )
}

export default PostItem
