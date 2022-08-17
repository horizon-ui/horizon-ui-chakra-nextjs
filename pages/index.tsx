import React from 'react'
import './assets/css/App.css'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from '../src/layouts/auth'
import AdminLayout from '../src/layouts/admin'
import RTLLayout from '../src/layouts/rtl'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme/theme'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RTLLayout} />
            <Redirect from='/' to='/admin' />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </ChakraProvider>
  )
}

export default Home
