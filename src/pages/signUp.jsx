import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "Form Data");
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <Box
        maxW={"400px"}
        borderRadius={5}
        bg={"gray.50"}
        mx={"auto"}
        p={5}
        boxShadow={"2xl"}
      >
        <form onSubmit={handleSubmit}>
          <Text fontSize={"2xl"} align={"center"} fontWeight={"bold"}>
            Sign Up
          </Text>
          <Stack>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                borderColor={"gray.400"}
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                borderColor={"gray.400"}
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                borderColor={"gray.400"}
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button type="submit" colorScheme={"green"}>
              Sign In
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default SignUp;
