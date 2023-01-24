// Créer un restaurant

// Lié le restaurant à une catégorie

import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const newRestaurant = await prisma.restaurant.create({
  data: {
    name: "Le petit bouchon",
    description: "Un petit bouchon à la campagne",
    likes: 12,
    seats: 20,
  },
})

const newCategoryObject: Prisma.CategoryCreateInput = {
  name: "Cuisine Italienne",
}

const newCategory = await prisma.category.create({
  data: newCategoryObject,
})

console.log(newRestaurant)
