import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const newUser = await prisma.user.create({
  data: {
    name: "John Doe",
  },
})

const pizzaPost = await prisma.post.create({
  data: {
    title: "How to cook a pizza",
    content: "First, you need to buy a pizza",
    author: {
      connect: {
        id: newUser.id,
      },
    },
  },
})

const companyPost = await prisma.post.create({
  data: {
    title: "How to cook a company",
    content: "First, you need to buy a company",
    author: {
      connectOrCreate: {
        create: {
          name: "Mark CEO",
        },
        where: {
          id: 111,
        },
      },
    },
  },
  include: { author: true },
})

const newPost = await prisma.post.create({
  data: {
    title: "How to cook a company",
    author: {
      connect: {
        id: newUser.id,
      },
    },
  },
})


