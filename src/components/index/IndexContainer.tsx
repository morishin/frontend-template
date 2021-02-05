import * as React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  PopoverTrigger,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Image,
  Icon,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import happyImage from "~images/happy.png";
import { environment } from "~lib/environment";

export const IndexContainer = () => {
  console.log(process.env.REPO_URL);
  return (
    <Container maxW="4xl" alignContent="start">
      <Box bg="white" minH="100vh" pl={10} pr={10} pt={5} pb={5}>
        <Heading mb={4}>
          <Flex spacing={4} alignItems="center">
            <Box>Hello World</Box>
            <Spacer />
            <a href={environment.repoUrl}>
              <Box justifyContent="center">
                <Icon viewBox="0 0 24 24" color="gray.600" display="block">
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </Icon>
              </Box>
            </a>
          </Flex>
        </Heading>
        <a href="https://www.irasutoya.com/2013/12/blog-post_3639.html">
          <Image src={happyImage} w={300} />
        </a>
        <Text fontSize="xl">This is frontend-template.</Text>
        <Popover>
          <PopoverTrigger>
            <Button leftIcon={<InfoIcon />} colorScheme="teal" mt={4}>
              Sey Hello
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Hello!</PopoverHeader>
            <PopoverBody>
              This template uses <a href="https://chakra-ui.com/">Chakra UI</a>.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Container>
  );
};
