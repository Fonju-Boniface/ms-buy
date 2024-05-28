import { Box } from '@chakra-ui/react';
import { Search } from '../Search/Search';
import { useTheme } from '@/ThemeContext';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';


export const Navbar = () => {
  const { darkMode } = useTheme();
  // import { useTheme } from '@/ThemeContext';
  return (
    <>
      <Box className="navbar-wrapper" h="fit-content">
        <Box pos="fixed" w="100%" bgColor={darkMode ? "white" : "black"} mb="1rem" zIndex={10000}>
          <DesktopNav />
          <MobileNav />
        </Box>
      </Box>
    </>
  );
};
