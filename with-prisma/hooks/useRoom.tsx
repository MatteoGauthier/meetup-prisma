import useSWR from "swr"
import fetcher from "../lib/fetcher"
import { Room } from "../types"

export default function useRoom(id: string) {
  const { data, error, isLoading } = useSWR<Room[]>(`/api/room/${id}`, fetcher)

  return {
    room: data,
    isLoading,
    isError: error,
  }
}
