import React from "react"
import clsx from "clsx"
type Props = {}

const rooms = [
  {
    id: 1,
    surface: 4,
    isAvailable: true,
  },
  {
    id: 2,
    surface: 5,
    isAvailable: false,
  },
]

export default function RoomViz({}: Props) {
  return (
    <div className="flex flex-col space-y-2 p-4 rounded-md m-6 bg-white shadow-xl">
      <h2 className="text-black text-xl font-bold">Visualisations des salles de réunions</h2>
      {/* {items ? items.map((item) => <PostItem key={item.id} {...item} />) : <div>Loading...</div>} */}
      <div className="flex flex-wrap gap-2">
        {rooms.map((room) => (
          <div
            className={clsx(
              "h-16 w-16 rounded-full font-bold flex items-center justify-center",
              room.isAvailable ? "bg-green-400" : "bg-red-400"
            )}
            key={room.id}
          >
            <div>{room.surface}m²</div>
          </div>
        ))}
      </div>
    </div>
  )
}
