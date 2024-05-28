"use client"
import { Box } from '@chakra-ui/react';
import { Checkout } from '@src/features/checkout';
import { NextPage } from 'next';
import React from 'react';
import { useTheme } from "@/ThemeContext";

const CheckoutPage: NextPage = () => {
  const { darkMode } = useTheme();

  return (
    <Box bg={darkMode ? "white" : "black"} padding="1rem">
      <Checkout />
    </Box>
  );
};

export default CheckoutPage;
