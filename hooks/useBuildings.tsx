import { Building } from "@prisma/client"
import useSWR from "swr"
import fetcher from "../lib/fetcher"

export default function useBuildings() {
  const { data, error, isLoading } = useSWR<Building[]>("/api/building", fetcher)

  return {
    buildings: data,
    isLoading,
    isError: error,
  }
}
