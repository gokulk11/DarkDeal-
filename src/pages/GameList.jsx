import React, { useState } from "react";
import Games from "../components/Games";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { HamburgerIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import PopularGames from "../components/PopularGames";
import { Form } from "react-router-dom";

const GameList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <Container py="2rem" maxWidth={{ lg: "900px" }} border="1px solid red">
      <Box border="1px solid ">
        <Heading as="h1" size={{ base: "md" }}>
          Popular Games
        </Heading>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            468: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}>
          <SwiperSlide>
            <PopularGames />
          </SwiperSlide>
          <SwiperSlide>
            <PopularGames />
          </SwiperSlide>
          <SwiperSlide>
            <PopularGames />
          </SwiperSlide>
          <SwiperSlide>
            <PopularGames />
          </SwiperSlide>
          <SwiperSlide>
            <PopularGames />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        my={{ base: ".5rem", lg: "1.5rem" }}>
        <Box display="flex" gap=".6rem" size={{ base: "sm", lg: "md" }}>
          <Text fontWeight="semibold" color="gray.400">
            Show:
          </Text>
          <Select
            display={{}}
            size={{ base: "sm", lg: "md" }}
            variant="unstyled"
            fontWeight="semibold">
            <option value="" disabled>
              All
            </option>
            <option value="New Release">New Release</option>
            <option value="Coming Soon">Coming Soon</option>
            <option value="Alphabetical">Alphabetical</option>
            <option value="Price:High to Low">Price:High to Low</option>
            <option value="Price:Low to High">Price:Low to High</option>
          </Select>
        </Box>
        <Box>
          <Button
            size={{ base: "sm", lg: "md" }}
            rightIcon={<HamburgerIcon />}
            colorScheme="black"
            variant="ghost"
            onClick={handleFilterClick}>
            Filter
          </Button>
        </Box>
      </Flex>
      <Modal isOpen={isFilterOpen} onClose={handleFilterClick}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input type="text" placeholder="Keywords" />
                </InputGroup>
              </FormControl>
              <Stack my={2}>
                <Select variant="filled" placeholder="Filled" />
                <Select variant="filled" placeholder="Filled" />
                <Select variant="filled" placeholder="Filled" />
                <Select variant="filled" placeholder="Filled" />
                <Select variant="filled" placeholder="Filled" />
              </Stack>
              <Box display="flex" justifyContent="flex-end" mt="1rem">
                <Button colorScheme="blue">Search</Button>
              </Box>
            </form>
          </ModalBody>
          <ModalFooter>
            {/* Add buttons or additional content for the modal footer */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default GameList;
