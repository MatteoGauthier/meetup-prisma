import { ContextModalProps, ModalsProvider } from "@mantine/modals"

import { Button, Text } from "@mantine/core"

const EditRoomModal = ({ context, id, innerProps }: ContextModalProps<{ roomId: string }>) => {
  return (
    <>
      <Text size="sm">{innerProps.roomId}</Text>
      <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
        Close modal
      </Button>
    </>
  )
}

export default EditRoomModal
