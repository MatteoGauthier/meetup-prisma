// demo-prisma.ts

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const user = await prisma.user.findFirst({
  where: {
    name: "Mickael Jackson",
  },
})

console.log(user)

// demo-prisma.ts

const updatedUser = prisma.user.update({
  where: {
    id: 2,
  },
  data: {
    name: "Miles Davis",
    posts: {
      connectOrCreate: {
        create: { title: "Who is the best jazz player?" },
        where: { id: 36 },
      },
    },
  },
  include: {
    posts: true,
  },
})

console.log(updatedUser)

const users = await prisma.user.findMany({
  include: {
    posts: true,
  },
})














console.log(users)
