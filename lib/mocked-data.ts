import { Building, Room } from "../types"

export const mockedData: {
  buildings: Building[]
  rooms: Room[]
} = {
  buildings: [
    {
      id: "dmMptqXACXtzSfAm5ptL5",
      name: "Bat A",
    },
    {
      id: "0QXbUJBk_b_RbMWxnB1Mf",
      name: "Bat B",
    },
  ],
  rooms: [
    {
      id: 1,
      surface: 4,
      isAvailable: true,
      name: "Salle 1",
    },
    {
      id: 2,
      surface: 5,
      isAvailable: false,
      name: "Salle 2",
    },
    {
      id: 3,
      surface: 6,
      isAvailable: true,
      name: "Salle 3",
    },
    {
      id: 4,
      surface: 7,
      isAvailable: false,
      name: "Salle 4",
    },
    {
      id: 5,
      surface: 8,
      isAvailable: true,
      name: "Salle 5",
    },
    {
      id: 6,
      surface: 9,
      isAvailable: true,
      name: "Salle 6",
    },
    {
      id: 7,
      surface: 10,
      isAvailable: true,
      name: "Salle 7",
    },
    {
      id: 8,
      surface: 11,
      isAvailable: false,
      name: "Salle 8",
    },
    {
      id: 9,
      surface: 12,
      isAvailable: true,
      name: "Salle 9",
    },
    {
      id: 10,
      surface: 13,
      isAvailable: false,
      name: "Salle 10",
    },
    {
      id: 11,
      surface: 14,
      isAvailable: false,
      name: "Salle 11",
    },
  ],
}
