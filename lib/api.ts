export const createBuilding = async ({ name }: { name: string }) => {
  const result = await fetch("/api/building", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  })

  if (result.ok) {
    return result.json()
  } else {
    throw new Error("Error while creating building")
  }
}

export const createRoom = async ({
  name,
  surface,
  color,
  description,
  building,
}: {
  name: string
  surface: number
  building: string
  description?: string
  color?: string
}) => {
  const result = await fetch("/api/room", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      surface,
      color,
      description,
      building,
    }),
  })

  if (result.ok) {
    return result.json()
  } else {
    throw new Error("Error while creating room")
  }
}
