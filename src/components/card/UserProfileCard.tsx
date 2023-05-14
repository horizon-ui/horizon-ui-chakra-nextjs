import {
  useStyleConfig,
  chakra,
  forwardRef,
  Flex,
  Text,
  Image,
  Box,
  Icon,
  Link,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";

const UserProfileCard = forwardRef((props, ref) => {
  const { avatar, name, discord, github, twitter, xp, size, variant, ...rest } = props;
  const styles = useStyleConfig("Card", { size, variant });

  return (
    <Box
      p={5}
      backgroundColor="#2F3644"
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      {...rest}
      ref={ref}
      display="flex"
    >
      <Box>
        <Image
          borderRadius="full"
          boxSize="100%"
          objectFit="cover"
          src={avatar}
          alt={name}
          alignSelf="stretch"
        />
      </Box>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        ml={4}
        flex="1"
      >
        <Flex align="center" justify="space-between" w="100%">
          <Flex align="center">
            <Text fontWeight="bold" fontSize="lg">
              {name}
            </Text>
            <Box ml={2} p={1} border="1px" borderRadius="md">
              <Text fontSize="sm">XP: {xp}</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex mt={2} direction="column" alignItems="flex-start" w="100%">
          <Flex>
            <Box
              bg={discord ? "blue.500" : "gray.200"}
              p={1}
              borderRadius="md"
              display="flex"
              alignItems="center"
            >
              <Icon as={FaDiscord} boxSize={4} color={discord ? "white" : "gray.500"} />
              <Text ml={1} color={discord ? "white" : "gray.500"}>
                Discord
              </Text>
              <Spacer />
              <Link ml={1} href="https://discord.com" isExternal>
                <LinkIcon color={"white"} />
              </Link>
            </Box>
            <Box
              bg={github ? "black" : "gray.200"}
              p={1}
              borderRadius="md"
              ml={2}
              display="flex"
              alignItems="center"
            >
              <Icon as={FaGithub} boxSize={4} color={github ? "white" : "gray.500"} />
              <Text ml={1} color={github ? "white" : "gray.500"}>
                GitHub
              </Text>
              <Spacer />
              <Link ml={1} href="https://github.com" isExternal>
                <LinkIcon color={"white"} />
              </Link>
            </Box>
            <Box
              bg={twitter ? "blue.400" : "gray.200"}
              p={1}
              borderRadius="md"
              ml={2}
              display="flex"
              alignItems="center"
            >
              <Icon as={FaTwitter} boxSize={4} color={twitter ? "white" : "gray.500"} />
              <Text ml={1} color={twitter ? "white" : "gray.500"}>
                Twitter
              </Text>
              <Spacer />
              <Link ml={1} href="https://twitter.com" isExternal>
                <LinkIcon color={"white"} />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="center" ml={4}>
        <Button colorScheme="teal" variant="outline">
          Follow
        </Button>
      </Flex>
    </Box>
  );
});

export default UserProfileCard;