import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"
import { SWRConfig } from "swr"
import EditRoomModal from "../components/modals/EditRoomModal"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <Toaster />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <ModalsProvider modals={{ "edit-room-modal": EditRoomModal /* ...other modals */ }}>
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </SWRConfig>
  )
}
