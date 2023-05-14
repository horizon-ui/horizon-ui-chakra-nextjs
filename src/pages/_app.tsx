import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import theme from 'theme/theme'
import { UserProvider} from '@auth0/nextjs-auth0/client';
import { HandleAuth } from '@auth0/nextjs-auth0';
import { handleAuth } from '@auth0/nextjs-auth0';

import 'styles/Fonts.css'
import 'styles/App.css'
import 'styles/Contact.css'

import 'react-calendar/dist/Calendar.css'
import 'styles/MiniCalendar.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
    <ChakraProvider theme={theme}>
      <Head>
        <title>Horizon UI Dashboard</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ChakraProvider>
    </UserProvider>
    
  )
}

export default MyApp
