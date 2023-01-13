import { Button, ColorInput, NumberInput, Paper, Select, Stack, TextInput, Title } from "@mantine/core"
import { IconRuler } from "@tabler/icons"
import { useCallback } from "react"
import { toast } from "react-hot-toast"
import { useSWRConfig } from "swr"
import useBuildings from "../hooks/useBuildings"
import useRooms from "../hooks/useRooms"
import { createRoom } from "../lib/api"
import BuildingSelect from "./BuildingSelect"
type Props = {}

export default function CreateRoom({}: Props) {
  const { mutate } = useSWRConfig()

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const room: Parameters<typeof createRoom>[0] = {
        name: data.get("name") as string,
        description: data.get("description") as string,
        buildingId: data.get("building") as string,
        surface: Number(data.get("surface")),
        color: data.get("color") as string,
      }
      try {
        await createRoom(room)
        toast.success("Le bâtiment a bien été créé")
        mutate("/api/room")
      } catch (error) {
        toast.error(error as string)
      }
    },
    [mutate]
  )

  return (
    <Paper shadow="xs" p="md">
      <Title mb={"md"} order={2}>
        Créer une nouvelle salle
      </Title>
      <form onSubmit={handleSubmit}>
        <Stack spacing={"md"}>
          <TextInput name={"name"} label="Nom de la salle" placeholder="Salle du soleil" type={"text"} required />
          <NumberInput
            placeholder="14m2"
            name={"surface"}
            label="Superficie (m2)"
            withAsterisk
            required
            icon={<IconRuler size={18} />}
          />
          <BuildingSelect name="building" />
          <TextInput
            label="Description"
            name={"description"}
            placeholder="Parfait pour le travail en groupe"
            type={"text"}
          />
          <ColorInput label="Couleur" name={"color"} autoComplete="off" placeholder="#FFFFFF" />
          <Button variant="gradient" type={"submit"} gradient={{ from: "teal", to: "lime", deg: 105 }}>
            Créer la salle
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}
