import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// className="text-2xl text-white-500 m-10  font-bold"
const Navbar = () => {
  return (
    <>
      <Box w="100%" h="60px" bgColor="teal-800"></Box>
      <Box w="20%" h="600px" border="1px solid black" bgColor="teal" color="white">
        <Link to="/contactpage">
          <Heading padding="50px" fontSize="30px" >Contact page</Heading>
        </Link>
        <hr />
        <Link to="/charts&maps">
          <Heading padding="50px" fontSize="30px">Charts and Maps</Heading>
        </Link>
        <hr />
      </Box>
    </>
  );
};

export default Navbar;
