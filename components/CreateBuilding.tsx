import { Button, NumberInput, Paper, Stack, Textarea, TextInput, Title } from "@mantine/core"
import { IconRuler, IconSquare } from "@tabler/icons"
import { toast } from "react-hot-toast"
import { createBuilding } from "../lib/api"
type Props = {}

export default function CreateBuilding({}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const building = {
      name: data.get("name") as string,
    }
    try {
      createBuilding(building)
      toast.success("Le bâtiment a bien été créé")
    } catch (error) {
      toast.error(error as string)
    }
  }

  return (
    <Paper shadow="xs" p="md">
      <Title mb={"md"} order={2}>
        Créer un nouveau bâtiment
      </Title>
      <form onSubmit={handleSubmit}>
        <Stack spacing={"md"}>
          <TextInput label="Nom du batiment" placeholder="Bat A" type={"text"} required />
          <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
            Créer le bâtiment
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}
