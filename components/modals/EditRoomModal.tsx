import { ContextModalProps } from "@mantine/modals"

import { Button, ColorInput, NumberInput, Radio, Stack, Text, TextInput } from "@mantine/core"
import { IconRuler } from "@tabler/icons"
import { useCallback } from "react"
import { toast } from "react-hot-toast"
import useRoom from "../../hooks/useRoom"
import { Room } from "../../types"

const EditRoomModal = ({ context, id, innerProps }: ContextModalProps<{ roomId: string } & Room>) => {
  const handleSubmit = useCallback(async () => {
    const result = await fetch(`/api/room/${innerProps.roomId}`, {})

    if (result.ok) {
      toast.success("Salle modifiée avec succès")
      context.closeModal(id)
    }
  }, [context, id, innerProps.roomId])

  return (
    <Stack>
      <Text size="sm">Modifier les propriété de la salle {innerProps.roomId}</Text>
      <TextInput
        label="Nom de la salle"
        defaultValue={innerProps.name}
        placeholder="Salle du soleil"
        type={"text"}
        required
      />
      <NumberInput
        placeholder="14m2"
        defaultValue={innerProps.surface}
        label="Superficie (m2)"
        withAsterisk
        icon={<IconRuler size={18} />}
      />
      <TextInput
        label="Description"
        defaultValue={innerProps.description}
        placeholder="Parfait pour le travail en groupe"
        type={"text"}
      />
      <ColorInput label="Couleur" defaultValue={innerProps.color || ""} autoComplete="off" placeholder="#FFFFFF" />
      <Radio.Group
        name="favoriteFramework"
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
        defaultValue={innerProps.isAvailable ? "open" : "closed"}
      >
        <Radio value="open" label="Ouvert" />
        <Radio value="closed" label="Occupé" />
      </Radio.Group>
      <Button fullWidth mt="md" color={"cyan"} onClick={handleSubmit}>
        Modifier la salle
      </Button>
    </Stack>
  )
}

export default EditRoomModal
