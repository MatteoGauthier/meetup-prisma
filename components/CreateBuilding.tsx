import { Button, NumberInput, Paper, Stack, Textarea, TextInput, Title } from "@mantine/core"
import { IconRuler, IconSquare } from "@tabler/icons"
type Props = {}

export default function CreateBuilding({}: Props) {
  return (
    <Paper shadow="xs" p="md">
      <Title mb={"md"} order={2}>
        Créer un nouveau bâtiment
      </Title>
      <Stack spacing={"md"}>
        <TextInput label="Nom du batiment" placeholder="Bat A" type={"text"} required />
        <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
          Créer le bâtiment
        </Button>
      </Stack>
    </Paper>
  )
}
