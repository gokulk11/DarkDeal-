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
} from "@chakra-ui/react";

const OrderItem = () => {
  return (
    <Card my={{base:"1rem", lg:"1.5rem"}}>
      <CardBody display={"flex"} gap={"10px"} justifyContent="space-between">
        <Box>
          <Image
            w={16}
            h={16}
            src="https://rukminim2.flixcart.com/image/850/1000/khavrm80-0/code-in-the-box-game/l/h/h/pc-gta-v-and-indian-army-pc-game-no-cd-dvd-premium-edition-original-imafxc88nepkekhh.jpeg?q=90&crop=false"
          />
        </Box>
        <Box>
          <Heading
            as={"h3"}
            size={{ base: "sm" }}
            fontWeight={"semibold"}
            textTransform={"uppercase"}>
            gta v deluxe edition
          </Heading>
          <Text
            fontWeight={"semibold"}
            textColor={"gray.700"}
            fontSize={{ base: ".9rem",lg:"1rem" }}>
            &#8377;1170.00
          </Text>
        </Box>
        <Box>
            <Text>Purchased on Aug 20,2022</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default OrderItem;
