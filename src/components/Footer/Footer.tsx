import {
  Box,
  chakra,
  Container,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AppLogo } from '../AppLogo';
import { useTheme } from '@/ThemeContext';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <Box bg="pink.50" color="gray.700" pb="3rem" bgColor={darkMode ? "white":"black"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <AppLogo />
            </Box>
            <Text fontSize="sm" color={darkMode ? "black":"white"}>© 2023 MS Buy. All rights reserved</Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href={'#'}>
                <FaTwitter color={darkMode ? "black":"white"} />
              </SocialButton>
              <SocialButton label="Facebook" href={'#'}>
                <FaFacebook color={darkMode ? "black":"white"}/>
              </SocialButton>
              <SocialButton label="Instagram" href={'#'}>
                <FaInstagram  color={darkMode ? "black":"white"}/>
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start" color={darkMode ? "black":"white"}>
            <ListHeader>Company</ListHeader>
            <Link color={darkMode ? "black":"white"} href='./'>Home</Link>
            <Link color={darkMode ? "black":"white"} href={'#testimonials'}>Testimonials</Link>
          </Stack>
          <Stack align="flex-start" color={darkMode ? "black":"white"}>
            <ListHeader>Support</ListHeader>
            <Link color={darkMode ? "black":"white"} href={'./products'}>All Products</Link>
            <Link color={darkMode ? "black":"white"} href={'./categories'}>Categories</Link>
            {/* <Link color={darkMode ? "black":"white"} href={'./#most_Selling_products'}>most Selling</Link>
            <Link color={darkMode ? "black":"white"} href={'#'}>Privacy Policy</Link> */}
          </Stack>
          <Stack align="flex-start" color={darkMode ? "black":"white"}>
            <ListHeader>Get the best deals</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder="Your email address"
                bg="blackAlpha.100"
                outline=".1rem"
                outlineColor="gray"
                color={darkMode ? "black":"white"}
                _focus={{
                  
                  border: ".1rem solid hsl(337,79%,60%)"
                }}
              />
              <IconButton
                bg="brand.primary"
                color="white"
                _hover={{
                  bg: 'brand.primaryDark',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Link href='https://fongang-fonju-fullstack-portfolio.netlify.app/' target="_blank" >Click me to <Text color="brand.primary">More About creator at My Portfolio</Text></Link>
          </Stack>
        </SimpleGrid>
        <Text color={darkMode ? "black":"white"} w="100%" textAlign="center">All By locked-code 2023 Loves to code all things <b>Life isn't a Straight Line</b></Text>
      </Container>
    </Box>
  );
};
