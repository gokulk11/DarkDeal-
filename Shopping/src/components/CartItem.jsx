import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { IoLogoWindows } from 'react-icons/io'

const CartItem = () => {
  return (
    <Card w={"100%"} my={{base:"10px"}}>
          <CardBody display={"flex"} gap={"1rem"}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Image
                w={"60px"}
                h={"80px"}
                src="https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2DeluxeEdition_RemedyEntertainment_Editions_S2_1200x1600-db032e8c839da2be59801023a4cdf083?h=480&quality=medium&resize=1&w=360"
              />
              <IoLogoWindows className=" text-slate-500" />
            </Box>
            <Box height={"fit-content"}>
              <Tag size={"sm"} color={"black"}>
                EDITION
              </Tag>
              <Heading as={"h3"} size={"md"}>
                Alan Wake 2
              </Heading>
              <Box display={"flex"} gap={"5px"} my={"10px"}>
                <Tag colorScheme="blue" variant={"solid"} size={"sm"}>
                  -40%
                </Tag>
                <Text
                  fontWeight={"semibold"}
                  textDecoration={"line-through"}
                  color={"gray.500"}>
                  &#8377;2000.00
                </Text>
                <Text fontWeight={"semibold"}>&#8377;1170.00</Text>
              </Box>
            </Box>
          </CardBody>
          <CardFooter>
            <Button colorScheme="gray" variant="link">
              Remove
            </Button>
          </CardFooter>
        </Card>
  )
}

export default CartItem