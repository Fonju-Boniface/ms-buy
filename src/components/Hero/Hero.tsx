"use client";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useTheme } from "@/ThemeContext";

interface IHeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnLink: string;
}

export const Hero = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) => {
  const { darkMode } = useTheme();
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      w="100%"
      padding="0 1rem 3rem 1rem"
      paddingTop={{ base: "120px", xl: "80px" }}
      bg={darkMode ? "white" : "black"}
      mb="3rem"
    >
      <Box mx="2rem" w={{ base: "100%", md: "50%" }}>
        <Heading color={darkMode ? "black" : "white"} size="2xl">{heading}</Heading>
        <Text  color={darkMode ? "black" : "white"} py="1rem">{description}</Text>

        <Link href={btnLink}>
          <Button color="brand.primary" variant="outline">{btnLabel}</Button>
        </Link>
      </Box>
      <Box mx="2rem" w={{ base: "100%", md: "50%" }} mt="1rem">
        <Image
          src={imageUrl}
          alt={heading}
          objectFit="cover"
          maxW={{ base: "100%" }}
          rounded="md"
        />
      </Box>
    </Card>
  );
};
