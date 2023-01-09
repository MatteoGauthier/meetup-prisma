import { Button, ColorInput, ColorPicker, NumberInput, Paper, Stack, Textarea, TextInput, Title } from "@mantine/core"
import { IconRuler, IconSquare } from "@tabler/icons"
type Props = {}

export default function CreateRoom({}: Props) {
  return (
    <Paper shadow="xs" p="md">
      <Title mb={"md"} order={2}>
        Créer une nouvelle salle
      </Title>
      <Stack spacing={"md"}>
        <TextInput label="Nom de la salle" placeholder="Salle du soleil" type={"text"} required />
        <NumberInput placeholder="14m2" label="Superficie (m2)" withAsterisk icon={<IconRuler size={18} />} />
        <TextInput label="Description" placeholder="Parfait pour le travail en groupe" type={"text"}  />
        <ColorInput label="Couleur" autoComplete="off" placeholder="#FFFFFF" />
        <Button variant="gradient" gradient={{ from: "teal", to: "lime", deg: 105 }}>
          Créer la salle
        </Button>
      </Stack>
    </Paper>
  )
}
