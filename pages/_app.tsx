import type { AppProps } from "next/app"
import { SWRConfig } from "swr"
import { Toaster } from "react-hot-toast"
import { NextUIProvider } from "@nextui-org/react"
import { MantineProvider } from "@mantine/core"

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
        <Component {...pageProps} />
      </MantineProvider>
    </SWRConfig>
  )
}
