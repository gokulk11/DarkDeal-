import {
  Box,
  Container,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Tag,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { IoLogoWindows } from "react-icons/io";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const Cart = () => {
  const { currentCart, summaryPrice } = useSelector((state) => state.cart);
  console.log(summaryPrice);
  const cartGames = currentCart.map((game) => (
    <CartItem
      id={game.id}
      title={game.title}
      edition={game.edition}
      offer={game.offer}
      price={game.price}
      platform={game.platform}
      discountPrice={game.discountPrice}
      count={game.count}
      totalPrice={game.totalPrice}
      image={game.image}
    />
  ));

  return (
    <Container
      my={"2rem"}
      minH={`${currentCart.length === 0 || 2 ? "100vh" : "100%"}`}
      maxWidth={{ lg: "900px", xl: "1200px" }}>
      <Heading as={"h1"}>My Cart</Heading>
      <Flex
        my={"1rem"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "space-between" }}>
        {/* Card start here */}
        <Box width={{ lg: "50%" }}>
          {currentCart.length === 0 ? (
            <Image src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" />
          ) : (
            cartGames
          )}
        </Box>
        {/* Cards End Here */}
        {currentCart.length > 0 && (
          <Box my={"3rem"}>
            <Heading as={"h1"} my={"1rem"} size={{ base: "lg" }}>
              Games and Items Summary
            </Heading>
            <Box fontWeight={"semibold"}>
              <Box display={"flex"} justifyContent={"space-between"} mb={"5px"}>
                <Text>Price</Text>
                <Text>&#8377;{summaryPrice}.00</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mb={"5px"}>
                <Text>Sale Discount</Text>
                <Text>&#8377;0.00</Text>
              </Box>
              <Divider />

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                my={"10px"}>
                <Text>Subtotal</Text>
                <Text>&#8377;{summaryPrice}.00</Text>
              </Box>
              <Button colorScheme="blue" my={"10px"} width={"100%"}>
                CHECK OUT
              </Button>
            </Box>
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default Cart;
