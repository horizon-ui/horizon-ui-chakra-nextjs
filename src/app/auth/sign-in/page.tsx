import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import DefaultAuthLayout from 'layouts/auth/Default';

export default function SignIn() {
  const router = useRouter();

  // Function to handle marketplace button click
  const handleMarketplaceClick = () => {
    // Redirect user to the desired page on the same dashboard URL
    router.push('/dashboard/marketplace');
  };

  return (
    <DefaultAuthLayout illustrationBackground={'/img/auth/auth.png'}>
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '14vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading fontSize="sm" mb="30px">
            Welcome to Marketplace
          </Heading>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            onClick={handleMarketplaceClick}
          >
            Marketplace
          </Button>
          <Text
            mb="36px"
            ms="4px"
            fontWeight="400"
            fontSize="md"
          >
            Connect with your favorite wallet to sign in!
          </Text>
        </Box>
      </Flex>
    </DefaultAuthLayout>
  );
}
