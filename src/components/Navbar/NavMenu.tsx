import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { navItems } from '@src/helpers';
import Link from 'next/link';
import React, { useRef } from 'react';
import { VscListFlat } from 'react-icons/vsc';
import { AppLogo } from '../AppLogo';
import { useTheme } from '@/ThemeContext';

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();
  const { darkMode } = useTheme();
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        // zIndex={10000}
      >
        <DrawerOverlay />
        <DrawerContent  paddingTop={{ base: "120px", xl: "80px" }}>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>
          <Divider />

        {/* {{ base: "120px", xl: "80px" }} */}
          <DrawerBody>
            {navItems.map((navItem) => (
              <Link href={navItem.href} key={navItem.label} onClick={onClose}>
                <Box
                  p="0.5rem"
                  _hover={{ bgColor: 'brand.primaryLight', color: 'white' }}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
