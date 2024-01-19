import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { updateUserFailure, updateUserStart, updateUserSuccess } from "../redux/user/userSlice";

const Account = () => {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  function handleFileUpload(file) {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },

      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <Container h={"100vh"} my={{ base: "1.5rem", lg: "2rem" }}>
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
            ID:{currentUser._id}
          </Text>
        </Box>
        <Box display={"flex"} my={{ base: "1rem" }} w={"100%"}>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
            />
            <Image
              onClick={() => fileRef.current.click()}
              alignSelf={"center"}
              my={{ base: ".5rem" }}
              w={"50px"}
              h={"50px"}
              borderRadius={"25px"}
              src={formData.avatar || currentUser.avatar}
              alt="profile"
            />
            {fileUploadError ? (
              <Alert status="error">
                <AlertIcon />
                Error image upload
              </Alert>
            ) : filePercentage > 0 && filePercentage < 100 ? (
              <Spinner alignSelf={"center"} />
            ) : filePercentage === 100 ? (
              <Alert status="success">
                <AlertIcon />
                Image uploaded successfully
              </Alert>
            ) : (
              ""
            )}
            <Box my={{ base: ".5rem" }}>
              <FormLabel color={"gray.500"}>Username</FormLabel>
              <Input
                type="text"
                id="username"
                placeholder="username"
                defaultValue={currentUser.username}
                size="lg"
                onChange={handleChange}
              />
            </Box>
            <Box my={{ base: ".5rem" }}>
              <FormLabel color={"gray.500"}>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                defaultValue={currentUser.email}
                size="lg"
                onChange={handleChange}
              />
            </Box>
            <Box my={{ base: ".5rem" }}>
              <FormLabel color={"gray.500"}>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                id="password"
                size="lg"
                onChange={handleChange}
              />
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={".5rem"}
              my={{ base: ".5rem" }}>
              <Button colorScheme="blue" type="submit">
                SAVE CHANGES
              </Button>
              <Button colorScheme="red" type="button">
                DELETE ACCOUNT
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default Account;
