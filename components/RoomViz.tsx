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
type Props = {}

export type Room = {
  id: string | number
  surface: number
  isAvailable: boolean
  name: string
  description?: string
  color?: string
}

const rooms: Room[] = [
  {
    id: 1,
    surface: 4,
    isAvailable: true,
    name: "Salle 1",
  },
  {
    id: 2,
    surface: 5,
    isAvailable: false,
    name: "Salle 2",
  },
  {
    id: 3,
    surface: 6,
    isAvailable: true,
    name: "Salle 3",
  },
  {
    id: 4,
    surface: 7,
    isAvailable: false,
    name: "Salle 4",
  },
  {
    id: 5,
    surface: 8,
    isAvailable: true,
    name: "Salle 5",
  },
  {
    id: 6,
    surface: 9,
    isAvailable: true,
    name: "Salle 6",
  },
  {
    id: 7,
    surface: 10,
    isAvailable: true,
    name: "Salle 7",
  },
  {
    id: 8,
    surface: 11,
    isAvailable: false,
    name: "Salle 8",
  },
  {
    id: 9,
    surface: 12,
    isAvailable: true,
    name: "Salle 9",
  },
  {
    id: 10,
    surface: 13,
    isAvailable: false,
    name: "Salle 10",
  },
  {
    id: 11,
    surface: 14,
    isAvailable: false,
    name: "Salle 11",
  },
]

export default function RoomViz({}: Props) {
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
        {rooms.map((room) => (
          <Card key={room.id} shadow="sm" p="sm" radius="md" withBorder>
            <Card.Section>
              <Image src={"https://source.unsplash.com/weekly?" + room.id} height={110} alt="Norway" />
              <Badge
                sx={{ position: "absolute", top: 8, right: 6 }}
                radius={"md"}
                variant="filled"
                color={"dark"}
                size={"md"}
              >
                Bat A
              </Badge>
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
        ))}
      </SimpleGrid>
    </Paper>
  )
}
