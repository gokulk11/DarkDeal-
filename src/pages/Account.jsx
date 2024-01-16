import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Account = () => {
  return (
    <Container h={"100vh"} my={{ base: "1rem", lg: "2rem" }}>
      <Flex flexDir={"column"}>
        <Box>
          <Heading as={"h1"} size={{ base: "lg" }} fontWeight={"semibold"}>
            Account Settings
          </Heading>
          <Text mt={".5rem"} fontSize={{ base: "small" }} color={"gray.500"}>
            Manage your account's details.
          </Text>
        </Box>
        <Box my={{ base: "1rem" }}>
          <Heading as={"h2"} size={{ base: "sm" }} fontWeight={"bold"}>
            Account Information
          </Heading>
          <Text mt={".5rem"} fontSize={{ base: "small" }} color={"gray.500"}>
            ID:1d952f905ad446e39775dad2d9926df9
          </Text>
        </Box>
        <Box display={"flex"} my={{ base: "1rem" }} w={"100%"}>
          <form className="flex flex-col w-full">
            <Image
              alignSelf={"center"}
              my={{ base: ".5rem" }}
              w={"50px"}
              h={"50px"}
              borderRadius={"25px"}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Box my={{ base: ".5rem" }}>
              <FormLabel color={"gray.500"}>Username</FormLabel>
              <Input type="text" placeholder="username" size="lg" />
            </Box>
            <Box my={{ base: ".5rem" }}>
              <FormLabel color={"gray.500"}>Email</FormLabel>
              <Input type="email" placeholder="Email" size="lg" />
            </Box>
            <Box my={{ base: ".5rem" }}>
              <FormLabel color={"gray.500"}>Password</FormLabel>
              <Input type="password" placeholder="password" size="lg" />
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={".5rem"}
              my={{ base: ".5rem" }}>
              <Button colorScheme="blue">SAVE CHANGES</Button>
              <Button colorScheme="red">DELETE ACCOUNT</Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default Account;
