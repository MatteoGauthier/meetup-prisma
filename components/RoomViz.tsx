import { Badge, Button, Card, Group, Image, Paper, Select, SimpleGrid, Switch, Text, Title } from "@mantine/core"
import { openContextModal } from "@mantine/modals"
import { useCallback, useMemo, useState } from "react"
import useBuildings from "../hooks/useBuildings"
import useRooms from "../hooks/useRooms"
import { colorFromString } from "../lib/utils"

type Props = {}

export default function RoomViz({}: Props) {
  const [filter, setFilter] = useState<"all" | string>("all")
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false)
  const { rooms } = useRooms()
  const { buildings } = useBuildings()

  const buildingsFilter = useMemo(() => {
    const list = buildings?.map((building) => ({ label: building.name, value: building.id })) || []
    return [{ label: "Tout les bâtiments", value: "all" }, ...list]
  }, [buildings])

  const filteredRooms = useMemo(
    () =>
      rooms
        ?.filter((r) => (showOnlyAvailable ? r.isAvailable : r))
        .filter((r) => (filter == "all" ? r : r.buildingId === filter)),
    [filter, rooms, showOnlyAvailable]
  )

  const getColor = useCallback((e: string) => colorFromString(e), [])

  console.log(rooms)

  return (
    <Paper shadow="xs" p="md">
      <Title order={2}>Visualisation des salles de réunions</Title>
      <hr style={{ opacity: 0.2 }} />
      <Group mb={"md"} align={"center"} sx={{ justifyContent: "space-between" }}>
        <Switch
          mt={8}
          onChange={(e) => setShowOnlyAvailable(e.currentTarget.checked)}
          label="Afficher uniquement les salles disponibles"
        />
        <Select defaultValue={"all"} onChange={(v) => v && setFilter(v)} data={buildingsFilter} />
      </Group>
      <SimpleGrid
        cols={4}
        spacing="md"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}
      >
        {filteredRooms ? (
          filteredRooms.map((room) => (
            <Card key={room.id} shadow="sm" p="sm" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={"https://source.unsplash.com/weekly?" + room.name.substring(0, 10)}
                  height={110}
                  alt="Norway"
                />
                {room?.building?.name && (
                  <Badge
                    sx={{ position: "absolute", top: 8, right: 6, backgroundColor: getColor(room.building.name) }}
                    radius={"md"}
                    variant="filled"
                    size={"md"}
                  >
                    {room.building.name}
                  </Badge>
                )}
              </Card.Section>

              <Group position="apart" mt="sm" mb="xs">
                <Text weight={500}>{room.name}</Text>
                {room.isAvailable ? <Badge color="green">Disponible</Badge> : <Badge color="red">Indisponible</Badge>}
              </Group>

              <Button
                onClick={() =>
                  openContextModal({
                    modal: "edit-room-modal",
                    title: "Modifier la salle de réunion",
                    innerProps: {
                      roomId: "ON6hJkjGahNmcAYYcXIl_",
                      ...room,
                    },
                  })
                }
                variant="light"
                color="blue"
                fullWidth
                p={0}
                mt="sm"
                radius="md"
              >
                Changer la disponibilité
              </Button>
            </Card>
          ))
        ) : (
          <Text>Chargement...</Text>
        )}
      </SimpleGrid>
    </Paper>
  )
}
