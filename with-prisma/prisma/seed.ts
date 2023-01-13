import { prisma } from "../lib/db"

async function main() {
  const b = await prisma.building.create({
    data: {
      name: "Darwin Nord",
    },
  })
  await prisma.room.create({
    data: {
      name: "Salle Ouest",
      surface: 100,
      building: {
        connect: {
          id: b.id,
        },
      },
    },
  })
  await prisma.room.create({
    data: {
      name: "Salle Nord-Est",
      surface: 50,
      building: {
        connect: {
          id: b.id,
        },
      },
    },
  })

  console.log("Done seeding ✅")
}

main()
