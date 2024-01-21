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

const Cart = () => {
  const { currentCart } = useSelector((state) => state.cart);

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
    <Container my={"2rem"} h={"100vh"} maxWidth={{ lg: "900px", xl: "1200px" }}>
      <Heading as={"h1"}>My Cart</Heading>
      <Flex
        my={"1rem"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "space-between" }}>
        {/* Card start here */}
        <Box width={{ lg: "50%" }} h={"fit-content"}>
          {cartGames}
        </Box>
        {/* Cards End Here */}
        <Box my={"1rem"}>
          <Heading as={"h1"} my={"1rem"} size={{ base: "lg" }}>
            Games and Items Summary
          </Heading>
          <Box fontWeight={"semibold"}>
            <Box display={"flex"} justifyContent={"space-between"} mb={"5px"}>
              <Text>Price</Text>
              <Text>&#8377;830.00</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={"5px"}>
              <Text>Sale Discount</Text>
              <Text>&#8377;2000.00</Text>
            </Box>
            <Divider />

            <Box display={"flex"} justifyContent={"space-between"} my={"10px"}>
              <Text>Subtotal</Text>
              <Text>&#8377;1170.00</Text>
            </Box>
            <Button colorScheme="blue" my={"10px"} width={"100%"}>
              CHECK OUT
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Cart;
