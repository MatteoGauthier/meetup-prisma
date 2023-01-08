import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import List from "../components/List"

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
      <main className={"max-w-screen-xl mx-auto"}>
        <List items={} />
      </main>
    </>
  )
}
