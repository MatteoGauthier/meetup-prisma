import React from "react"
import clsx from "clsx"
import {
  Badge,
  Button,
  Card,
  Chip,
  Group,
  Image,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Switch,
  Text,
  Title,
} from "@mantine/core"
import { openContextModal } from "@mantine/modals"
import { Room } from "../types"
import fetcher from "../lib/fetcher"
import useSWR from "swr"

type Props = {}

export default function RoomViz({}: Props) {
  const { data: rooms } = useSWR<Room[]>("/api/room", fetcher)

  return (
    <Paper shadow="xs" p="md">
      <Title order={2}>Visualisation des salles de réunions</Title>
      <hr style={{ opacity: 0.2 }} />
      <Group mb={"md"} align={"center"} sx={{ justifyContent: "space-between" }}>
        <Switch mt={8} label="Afficher uniquement les salles disponibles" />
        <SegmentedControl
          size={"sm"}
          radius={"md"}
          data={[
            { label: "React", value: "react" },
            { label: "Angular", value: "ng" },
            { label: "Vue", value: "vue" },
            { label: "Svelte", value: "svelte" },
          ]}
        />
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
        {rooms ? (
          rooms.map((room) => (
            <Card key={room.id} shadow="sm" p="sm" radius="md" withBorder>
              <Card.Section>
                <Image src={"https://source.unsplash.com/weekly?" + room.id} height={110} alt="Norway" />
                {room.building && (
                  <Badge
                    sx={{ position: "absolute", top: 8, right: 6 }}
                    radius={"md"}
                    variant="filled"
                    color={"dark"}
                    size={"md"}
                  >
                    {room.building}
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
