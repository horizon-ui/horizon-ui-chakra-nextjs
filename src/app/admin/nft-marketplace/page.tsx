'use client';
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

import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';

// Custom components
import TableTopCreators from 'views/admin/marketplace/components/TableTopCreators';
import HistoryItem from 'views/admin/marketplace/components/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';
import tableDataTopCreators from 'views/admin/marketplace/variables/tableDataTopCreators';

// Assets
import Nft1 from 'img/nfts/Nft1.png';
import Nft2 from 'img/nfts/Nft2.png';
import Nft3 from 'img/nfts/Nft3.png';
import Nft4 from 'img/nfts/Nft4.png';
import Nft5 from 'img/nfts/Nft5.png';
import Nft6 from 'img/nfts/Nft6.png';
import tomato from 'img/nfts/tomato.png';
import brocoli from 'img/nfts/brocoli.png';
import potato from 'img/nfts/potato.png';
import beef from 'img/nfts/beef.png';
import avocado from 'img/nfts/avocado.png';
import pork from 'img/nfts/pork.png';
import onion from 'img/nfts/onion.png';
import Avatar1 from 'img/avatars/avatar1.png';
import Avatar2 from 'img/avatars/avatar2.png';
import Avatar3 from 'img/avatars/avatar3.png';
import Avatar4 from 'img/avatars/avatar4.png';
import AdminLayout from 'layouts/admin';

export default function NftMarketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
        >
          {/* <Banner /> */}
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Trending Products
              </Text>
              <Flex
                align="center"
                me="20px"
                ms={{ base: '24px', md: '0px' }}
                mt={{ base: '20px', md: '0px' }}
              >
                <Link
                  href="#art"
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                >
                  Vegetables
                </Link>
                <Link
                  href="#music"
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                >
                  Fruits
                </Link>
                <Link
                  href="#collectibles"
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                >
                  Meat
                </Link>
                <Link href="#sports" color={textColorBrand} fontWeight="500">
                  Nuts
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
              <NFT
                name="Tomato"
                author="200 lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={tomato}
                currentbid="0.91 USD/lb"
                download="#"
              />
              <NFT
                name="Brocoli"
                author="100 lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={brocoli}
                currentbid="0.91 USD/lb"
                download="#"
              />
              <NFT
                name="Potato "
                author="120lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={potato}
                currentbid="0.91 USD"
                download="#"
              />
            </SimpleGrid>
            <Text
              mt="45px"
              mb="36px"
              color={textColor}
              fontSize="2xl"
              ms="24px"
              fontWeight="700"
            >
              Matched For You
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap="20px"
              mb={{ base: '20px', xl: '0px' }}
            >
              <NFT
                name="Beef"
                author="200 lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={beef}
                currentbid="0.91 USD"
                download="#"
              />
              <NFT
                name="Avocado "
                author="120lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={avocado}
                currentbid="0.91 USD"
                download="#"
              />
              <NFT
                name="Tomato"
                author="200 lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={tomato}
                currentbid="0.91 USD"
                download="#"
              />
              <NFT
                name="Pork"
                author="200 lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={pork}
                currentbid="0.91 USD"
                download="#"
              />
              <NFT
                name="Potato "
                author="120lbs"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={potato}
                currentbid="0.91 USD"
                download="#"
              />
              <NFT
                name="Onion"
                author="By Manny Gates"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                ]}
                image={onion}
                currentbid="0.91 USD"
                download="#"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
        >
          <Card px="0px" mb="20px">
            <TableTopCreators tableData={tableDataTopCreators} />
          </Card>
          <Card p="0px">
            <Flex
              align={{ sm: 'flex-start', lg: 'center' }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Order History
              </Text>
              <Button variant="action">See all</Button>
            </Flex>

            <HistoryItem
              name="Tomato"
              author="90 lbs"
              date="30s ago"
              price="0.60 USD"
            />
            <HistoryItem
              name="Beef"
              author="120 lbs"
              date="2d ago"
              price="0.94 USD"
            />
            <HistoryItem
              name="Beans"
              author="300 lbs"
              date="5d ago"
              price="0.91 USD"
            />
            <HistoryItem
              name="Avocados"
              author="200 lbs"
              date="10d ago"
              price="0.98 USD"
            />
            <HistoryItem
              name="Tomatos"
              author="340 lbs"
              date="18d ago"
              price="0.61 USD"
            />
            <HistoryItem
              name="Beans"
              author="88 lbs"
              date="24d ago"
              price="0.09 USD"
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
