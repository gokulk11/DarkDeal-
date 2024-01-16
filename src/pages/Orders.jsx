import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  return (
    <Container h={"100vh"} my={{base:"1rem", lg:"1.5rem"}}>
      <Box my={{base:"1rem", lg:"1.5rem"}}>
        <Heading as={"h1"} size={{ base: "lg" }} fontWeight={"semibold"}>
          My Orders
        </Heading>
      </Box>
      <Box>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Box>
    </Container>
  );
};

export default Orders;
