import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { SWRConfig } from "swr"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <Toaster />
      <Component {...pageProps} />
    </SWRConfig>
  )
}
