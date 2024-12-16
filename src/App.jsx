import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function App() {
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
        <Text fontSize={"2xl"} align={"center"} fontWeight={"bold"}>
          Sign Up
        </Text>
        <Stack>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" borderColor={"gray.400"} />
          </FormControl>
          <FormControl id="name">
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" borderColor={"gray.400"} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" borderColor={"gray.400"} />
          </FormControl>
          <Button type="submit" colorScheme={"green"}>
            Sign In
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default App;
