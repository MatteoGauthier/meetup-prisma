import {
  Button,
  ColorInput, NumberInput,
  Paper,
  Select,
  Stack, TextInput,
  Title
} from "@mantine/core"
import { IconRuler } from "@tabler/icons"
import { useCallback } from "react"
import { toast } from "react-hot-toast"
import useSWR from "swr"
import { createRoom } from "../lib/api"
import fetcher from "../lib/fetcher"
import { Building } from "../types"
type Props = {}

export default function CreateRoom({}: Props) {
  const { data: buildings } = useSWR<Building[]>("/api/building", fetcher)

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const room: Parameters<typeof createRoom>[0] = {
      name: data.get("name") as string,
      description: data.get("description") as string,
      building: data.get("building") as string,
      surface: Number(data.get("surface")),
      color: data.get("color") as string,
    }
    try {
      createRoom(room)
      toast.success("Le bâtiment a bien été créé")
    } catch (error) {
      toast.error(error as string)
    }
  }, [])

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
            icon={<IconRuler size={18} />}
          />
          <Select
            label="Dans quel bâtiment se trouve la salle ?"
            placeholder="Darwin"
            data={buildings?.map((building) => ({ label: building.name, value: building.name })) || []}
          />
          <TextInput
            label="Description"
            name={"description"}
            placeholder="Parfait pour le travail en groupe"
            type={"text"}
          />
          <TextInput label="Bâtiment" name={"building"} placeholder="Parfait pour le travail en groupe" type={"text"} />
          <ColorInput label="Couleur" name={"color"} autoComplete="off" placeholder="#FFFFFF" />
          <Button variant="gradient" type={"submit"} gradient={{ from: "teal", to: "lime", deg: 105 }}>
            Créer la salle
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}
