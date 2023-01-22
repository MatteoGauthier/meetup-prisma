import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["query"],
})

const postPizza = await prisma.post.findFirst({
  where: {
    title: "How to cook a pizza",
  },
})

const post = await prisma.post.findFirst({
  where: {
    title: "How to cook a pizza",
  },
  select: {
    title: true,
  },
})

console.log(JSON.stringify(post, null, 2))
