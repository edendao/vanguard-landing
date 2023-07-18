import { SaasProvider } from "@saas-ui/react"
import { Layout } from "components/layout"
import type { AppProps } from "next/app"

import theme from "../theme"

function App({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps

  return (
    <SaasProvider theme={theme}>
      <Layout
        announcementProps={announcement}
        headerProps={header}
        footerProps={footer}
      >
        <Component {...pageProps} />
      </Layout>
    </SaasProvider>
  )
}

export default App
