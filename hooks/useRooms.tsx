import { Prisma, Room } from "@prisma/client"
import useSWR from "swr"
import fetcher from "../lib/fetcher"

export default function useRooms() {
  const { data, error, isLoading } = useSWR<
    Prisma.RoomGetPayload<{
      include: {
        building: true
      }
    }>[]
  >(`/api/room`, fetcher)

  return {
    rooms: data,
    isLoading,
    isError: error,
  }
}
