import { NativeSelect, Select } from "@mantine/core"
import React from "react"
import useBuildings from "../hooks/useBuildings"

type Props = { name: string; defaultValue?: string }

export default function BuildingSelect({ name, defaultValue }: Props) {
  const { buildings } = useBuildings()

  return (
    <NativeSelect
      label="Dans quel bâtiment se trouve la salle ?"
      placeholder="Darwin"
      name={name}
      required
      wrapperProps={{
        required: true,
      }}
      defaultValue={defaultValue}
      data={buildings?.map((building) => ({ label: building.name, value: building.id })) || []}
    />
  )
}
