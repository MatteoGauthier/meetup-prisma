import useSWR from "swr"
import fetcher from "../lib/fetcher"
import { Room } from "../types"

export default function useRooms() {
  const { data, error, isLoading } = useSWR<Room[]>(`/api/room`, fetcher)

  return {
    rooms: data,
    isLoading,
    isError: error,
  }
}
