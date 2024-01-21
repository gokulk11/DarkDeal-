import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Tag,
  Text,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoLogoWindows } from "react-icons/io";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decrementItem, incrementItem } from "../redux/cart/cartSlice";

const CartItem = ({
  id,
  title,
  image,
  edition,
  offer,
  count,
  discountPrice,
  price,
  platform,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.currentCart.find((item) => item.id === id)
  );

  const handleRemoveCart = () => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = () => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(id));
  };


  return (
    <Card w={"100%"} my={{ base: "10px" }}>
      <CardBody display={"flex"} gap={"1rem"}>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Image w={"60px"} h={"80px"} src={image} alt="game" />
          {platform === "PC" ? (
            <IoLogoWindows className=" text-slate-500" />
          ) : platform === "PS5" ? (
            <SiPlaystation5 className="h-6 w-6" />
          ) : (
            platform === "PS4"(<SiPlaystation4 className="h-6 w-6" />)
          )}
        </Box>
        <Box height={"fit-content"}>
          <Tag size={"sm"} color={"black"}>
            {edition}
          </Tag>
          <Heading as={"h3"} size={"md"}>
            {title}
          </Heading>
          <Box display={"flex"} gap={"5px"} my={"10px"}>
            {offer && (
              <>
                <Tag colorScheme="blue" variant={"solid"} size={"sm"}>
                  -40%
                </Tag>
                <Text
                  fontWeight={"semibold"}
                  textDecoration={"line-through"}
                  color={"gray.500"}>
                  &#8377;{discountPrice}
                </Text>
              </>
            )}
            <Text fontWeight={"semibold"}>&#8377;{price}</Text>
          </Box>
        </Box>
      </CardBody>
      <CardFooter
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <Button colorScheme="gray" variant="link" onClick={handleRemoveCart}>
          Remove
        </Button>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={"5px"}>
          <Box display={"flex"} gap={"5px"}>
            <IconButton
              icon={<MinusIcon />}
              color={"gray.700"}
              bg={"transparent"}
              size="xs"
              onClick={handleDecrement}
            />
            <Text fontWeight={"semibold"}>{count}</Text>
            <IconButton
              bg={"transparent"}
              icon={<AddIcon />}
              color={"gray.700"}
              size="xs"
              onClick={handleIncrement}
            />
          </Box>
          <Text fontSize={12} fontWeight={"semibold"} color={"blueviolet"}>
            Totalprice: &#8377;{totalPrice}
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
