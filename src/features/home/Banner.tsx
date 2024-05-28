"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useTheme } from '@/ThemeContext';
import { BannerSlider } from "./BannerSlider";
import "./Banner.css";

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  const { darkMode } = useTheme();
  // import { useTheme } from '@/ThemeContext';
  return (
    <Box>
      <Flex
        minHeight="100vh"
        paddingTop={{ base: "120px", xl: "80px" }}
        className="HeroDisplay"
        pos="relative"
        // mx="auto"
        // p="2rem"
        bg={darkMode ? "white" : "black"} 
      >
        <Box
          className="boxH"
          display="flex"
          justifyContent="center"
          paddingLeft="100px"
          flexDirection="column"
          bg={darkMode ? "#f8f8f8ba" : "#000000ba" }
          zIndex={10}
        >
          <Heading
            size={{ base: "xl", lg: "3xl" }}
            lineHeight="4rem"
            color="brand.primary"
          >
            Online Shopping <br /> Made Easy
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} py="1rem" maxW="600px" color={darkMode ? "black" : "white"} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem voluptatem iure illo optio obcaecati accusantium fugiat
            dolores tenetur
          </Text>
          <Link href="/products">
            <Button
              borderRadius="50px"
              minW="10rem"
              bgColor="brand.primary"
              color="white"
              _hover={{ bgColor: "brand.primaryDark" }}
            >
              Shop Now
            </Button>
          </Link>
        </Box>
        <Box
          className="boxH"
          position="absolute"
          right="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          top="50px"
        >
          <Box
            w={{ base: "500px", xl: "500px" }}
            h={{ base: "500px", xl: "500px" }}
            bg="center / cover no-repeat url(mockup.svg)"
          />
          {/* <BannerSlider /> */}
        </Box>
      </Flex>
    </Box>
  );
};
