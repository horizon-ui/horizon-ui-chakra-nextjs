import { Box, Flex, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import { Image } from 'components/image/Image'
import logoWhite from 'img/layout/logoWhite.png'
import CustomCard from 'components/card/Card'

export default function SidebarDocs ({ userName, userXP, userAvatar }) {
  const bgColor = '#FBCAFF'
  const borderColor = useColorModeValue('white', 'navy.800')

  return (
    <CustomCard backgroundColor='#5F55D6' width='95%'>
      <Flex direction="row" alignItems="center" height="100%">
        <Image 
          boxHeight="80%"
          borderRadius="full"
          objectFit="cover"
          src={userAvatar}
          alt="User Avatar"
        />
        <Text color="white" ml={3}>{userName} Lyons800</Text>
        <Spacer />
        <Box backgroundColor={bgColor} borderRadius="35px" p={2} mr={2}>
          <Text color="#5F55D6">{`XP: 150`}</Text>
        </Box>
      </Flex>
    </CustomCard>
  )
}

