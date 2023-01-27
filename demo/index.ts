// Créer un restaurant

// Lié le restaurant à une catégorie

import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const newCategory = await prisma.category.create({
  data: {
    name: "Italian food ",
  },
})

const newRestaurant = await prisma.restaurant.create({
  data: {
    name: "Murano",
    description: "Hey",
    category: {
      connect: {
        id: newCategory.id,
      },
    },
  },
})

const restaurantFakeBody: Prisma.RestaurantCreateInput = {
  name: "Restaurant 1",
  description: "example",
  category: {},
}

console.log(newRestaurant)
