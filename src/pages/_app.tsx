import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import 'styles/App.css'
import 'styles/Contact.css'
import 'styles/MiniCalendar.css'
import theme from 'theme/theme'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ChakraProvider>
  )
}

export default MyApp
