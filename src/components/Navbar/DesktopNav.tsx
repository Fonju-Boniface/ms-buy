import { navItems } from "@/helpers";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import { Search } from "../Search/Search";
import { useTheme } from "@/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { color } from "framer-motion";

export function DesktopNav() {
  // import { useTheme } from "@/ThemeContext";
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: "none", xl: "flex" }}
      px="2rem"
      py="1rem"
      // borderBottom="1px"
      // borderColor="gray.200"
      bgColor={darkMode ? "white" : "black"} 
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <AppLogo />
        </Box>

        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>
              {" "}
              <Text
                style={darkMode ? { color: "black" } : { color: "white" }}
                className="redVavLink"
              >
                {navItem.label}
              </Text>{" "}
            </Link>
          </Box>
        ))}
        <Box
        px="2rem"
        py="0.5rem"
        // mb="1rem"
        display={{ base: '100%', xl: 'flex' }}
      >
        <Search />

      </Box>

      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          // bgColor={darkMode ? "white" : "black"}
          color="brand.primary"
          variant="ghost"
          _hover={
            darkMode
              ? {
                  color: "black",
                }
              : {
                  color: "white",
                }
          }
          pos="relative"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </Button>

        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  );
}
