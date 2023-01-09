import { AppShell, Container, Group, SimpleGrid, Space } from "@mantine/core"
import { Inter } from "@next/font/google"
import Head from "next/head"
import CreateBuilding from "../components/CreateBuilding"
import CreateRoom from "../components/CreateRoom"
import RoomViz from "../components/RoomViz"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Meetup Prisma</title>
        <meta name="description" content="Example app with Prisma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        padding="md"
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Container>
          <RoomViz />
          <Space h="md" />
          <SimpleGrid sx={{ alignItems: "start" }} cols={2}>
            <CreateRoom />
            <CreateBuilding />
          </SimpleGrid>
        </Container>
      </AppShell>
    </>
  )
}
