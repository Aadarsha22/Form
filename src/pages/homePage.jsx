import { Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction={"row"} gap={3} justifyContent={"space-between"}>
        <Heading>ECommerce</Heading>
        <Stack direction={"row"}>
          <Button colorScheme="green" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button colorScheme="green" onClick={() => navigate("/signup")}>Signup</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
