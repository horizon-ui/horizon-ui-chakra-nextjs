/* eslint-disable */

import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer(props: { [x: string]: any }) {
  let textColor = useColorModeValue('gray.400', 'white');
  let linkColor = useColorModeValue({ base: 'gray.400', lg: 'white' }, 'white');
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'start',
      }}
      justifyContent="space-between"
      px={{ base: '30px', md: '0px' }}
      pb="30px"
      {...props}
    >
      <Text
        color={textColor}
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        mb={{ base: '20px', lg: '0px' }}
      >
        {' '}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Blockcity Marketplace 
          <Link
            mx="3px"
            color={textColor}
            href="https://www.simmmple.com"
            target="_blank"
            fontWeight="700"
          >
          
          </Link>
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="mailto:hello@blockcity.fi"
          >
            Support
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://www.simmmple.com/licenses"
          >
            License
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://simmmple.com/terms-of-service"
          >
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://www.blog.simmmple.com/"
          >
            Blog
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
