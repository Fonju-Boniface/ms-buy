import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { AppLogo } from "../AppLogo";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import { Search } from "../Search/Search";
import { NavMenu } from "./NavMenu";
import { useTheme } from "@/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./NavBar.css"
export function MobileNav() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: "flex", xl: "none" }}
        px="2rem"
        py="1rem"
        // borderBottom="1px"
        // borderColor="gray.200"
        bgColor={darkMode ? "white" : "black"}
        className="MobilNav"
      >
        <AppLogo />

        <Stack direction="row" spacing={1}>
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
          <Flex zIndex={1} className="MobilsSubNavBot" bgColor={darkMode ? "white" : "black"}>

            <Wishlist />
            <Cart />
          </Flex>
          <NavMenu />
        </Stack>
      </Flex>
      <Box
        px="2rem"
        py="0.5rem"
        // mb="1rem"
        display={{ base: "100%", xl: "none" }}
      >
        <Search />
      </Box>
    </>
  );
}
