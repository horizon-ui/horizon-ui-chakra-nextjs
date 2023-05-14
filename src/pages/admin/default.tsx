/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
// Assets
// Custom components

import IconBox from 'components/icons/IconBox'
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy
} from 'react-icons/md'

import {
  columnsDataCheck,
  columnsDataComplex,
  TableData
} from 'views/admin/default/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'

export default function UserReports () {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
            gap='20px'
            mb='20px'
          >
           
          
            
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
           
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
           
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
           
          </SimpleGrid>
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  )
}
