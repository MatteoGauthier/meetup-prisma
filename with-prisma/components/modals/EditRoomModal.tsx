import { ContextModalProps } from "@mantine/modals"

import { Button, ColorInput, NumberInput, Radio, Stack, Text, TextInput } from "@mantine/core"
import { Room } from "@prisma/client"
import { IconRuler } from "@tabler/icons"
import { useCallback } from "react"
import { toast } from "react-hot-toast"
import { mutate } from "swr"
import { updateRoom } from "../../lib/api"
import { cleanObject } from "../../lib/utils"
import BuildingSelect from "../BuildingSelect"

const EditRoomModal = ({ context, id, innerProps }: ContextModalProps<{ roomId: string } & Room>) => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const room: Parameters<typeof updateRoom>[1] = {
        name: data.get("name") as string,
        description: data.get("description") as string,
        buildingId: data.get("building") as string,
        surface: Number(data.get("surface")),
        color: data.get("color") as string,
        isAvailable: (data.get("isAvailable") as string) === "open",
      }

      try {
        await updateRoom(innerProps.id, cleanObject(room))
        toast.success("La salle a bien été modifié")
        mutate("/api/room")
        context.closeModal(id)
      } catch (error: any) {
        console.log(error.message)
        toast.error(error.message as string)
      }
    },
    [context, id, innerProps.id]
  )

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Text size="sm">Modifier les propriété de la salle {innerProps.roomId}</Text>
        <TextInput
          name="name"
          label="Nom de la salle"
          defaultValue={innerProps.name}
          placeholder="Salle du soleil"
          type={"text"}
          required
        />
        <NumberInput
          name="surface"
          placeholder="14m2"
          defaultValue={innerProps.surface}
          label="Superficie (m2)"
          withAsterisk
          icon={<IconRuler size={18} />}
        />
        <BuildingSelect defaultValue={innerProps.buildingId} name="building" />
        <TextInput
          name="description"
          label="Description"
          defaultValue={innerProps.description || undefined}
          placeholder="Parfait pour le travail en groupe"
          type={"text"}
        />
        <ColorInput
          name="color"
          label="Couleur"
          defaultValue={innerProps.color || ""}
          autoComplete="off"
          placeholder="#FFFFFF"
        />
        <Radio.Group
          name="isAvailable"
          label="Occupation"
          description="This is anonymous"
          withAsterisk
          defaultValue={innerProps.isAvailable ? "open" : "closed"}
        >
          <Radio value="open" label="Ouvert" />
          <Radio value="closed" label="Occupé" />
        </Radio.Group>
        <Button fullWidth mt="md" color={"cyan"} type="submit">
          Modifier la salle
        </Button>
      </Stack>
    </form>
  )
}

export default EditRoomModal
