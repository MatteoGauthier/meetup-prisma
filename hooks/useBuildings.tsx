import useSWR from "swr"
import fetcher from "../lib/fetcher"
import { Building } from "../types"

export default function useBuildings() {
  const { data, error, isLoading } = useSWR<Building[]>(`/api/building`, fetcher)

  console.log('🚀 ~ file: useBuildings.tsx:8 ~ data', data)
  return {
    buildings: data,
    isLoading,
    isError: error,
  }
}
