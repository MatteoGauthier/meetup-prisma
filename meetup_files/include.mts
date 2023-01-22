import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["query"],
})

// await prisma.user.create({
//   data: {
//     name: "John Doe",
//     posts: {
//       create: {
//         title: "How to cook a pizza",
//         content: "First, you need to buy a pizza",
//       },
//     },
//   },
// })

const users = await prisma.user.findMany({
  include: {
    posts: true,
  },
})

console.log(JSON.stringify(users, null, 2))

