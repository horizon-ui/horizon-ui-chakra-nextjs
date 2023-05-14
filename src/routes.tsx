import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdPerson,
  MdHome,
 
} from 'react-icons/md'

// Admin Imports
import MainDashboard from 'pages/admin/default'
import profile from 'pages/admin/profile'

// Auth Imports
import SignInCentered from 'pages/auth/sign-in'
import { IRoute } from 'types/navigation'

const routes: IRoute[] = [
  {
    name: 'Overview',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Proposals',
    layout: '/admin',
    path: '/proposals',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
 
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: profile
  },
 
]

export default routes
