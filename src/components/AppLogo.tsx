import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useTheme } from "@/ThemeContext";

export const AppLogo = () => {
   const { darkMode } = useTheme();
  return (
    <Link href="/">
      <Text fontWeight="bold" color={darkMode ? "black" : "white"} >
       All{' '}-
        <Text as="span" color="brand.primary">
          SHOP
        </Text>
      </Text>
    </Link>
  );
};
