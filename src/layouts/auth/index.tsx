import { PropsWithChildren, useEffect, useState } from 'react'
import routes from 'routes'

// Chakra imports
import { Box, useColorModeValue } from '@chakra-ui/react'

// Layout components
import { SidebarContext } from 'contexts/SidebarContext'
import { isWindowAvailable } from 'utils/navigation'

interface AuthLayuoutProps extends PropsWithChildren {}

// Custom Chakra theme
export default function AuthLayout ({ children }: AuthLayuoutProps) {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const authBg = useColorModeValue('white', 'navy.900')

  useEffect(() => {
    if (!isWindowAvailable()) return
    window.document.documentElement.dir = 'ltr'
  })

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar
        }}
      >
        <Box
          bg={authBg}
          float='right'
          minHeight='100vh'
          height='100%'
          position='relative'
          w='100%'
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'
        >
          <Box mx='auto' minH='100vh'>
            {children}
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  )
}
