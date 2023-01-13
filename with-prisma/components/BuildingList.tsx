import { Group, Paper, Stack, Text, Title } from "@mantine/core"
import useBuildings from "../hooks/useBuildings"

type Props = {}

export default function BuildingList({}: Props) {
  const { buildings } = useBuildings()

  return (
    <Paper shadow="xs" p="md">
      <Title mb={"md"} order={2}>
        Liste des bâtiments
      </Title>
      <Stack spacing={"xs"}>
        {buildings?.map((building) => (
          <Group key={building.id} sx={{ justifyContent: "space-between" }}>
            <Text ff="monospace">{building.name}</Text>
            <Text ff="monospace">{building.id}</Text>
          </Group>
        ))}
      </Stack>
    </Paper>
  )
}
