import { useEffect, useState } from "react";
import { client, urlFor } from "@utils/sanity.client";
import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";
import { useTheme } from "@/ThemeContext";
import Rating from "react-rating";
import ReactStars from "react-stars";
import TestimonialForm from "./TestimonialForm";
import "./Testimonials.css"
// import { FaXmark } from "./react-icons/fa6";
import { BsCart4, BsXLg } from "react-icons/bs";


const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);

  const toggleTestimonialForm = () => {
    setShowTestimonialForm(!showTestimonialForm);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const query = '*[_type == "testimonials"]';
        const testimonialData = await client.fetch(query);
        setTestimonials(testimonialData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError(
          "An error occurred while fetching testimonials. Please try again later."
        );
      }
    };

    fetchTestimonials();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 4);
    const { darkMode } = useTheme();
    // import { useTheme } from "@/ThemeContext";
    return (
      <>
      {showTestimonialForm && <TestimonialForm />}
      <Flex
        w="full"
        display="flex"
        flexWrap="wrap"
        alignItems="flexstart"
        justifyContent="space-between"
        gap="2rem"
        // pos="relative"
        
        // bg="red"
        // bg={darkMode ? "white" : "black"}
        >
        {error && (
          <Box color="red.500" mb={4}>
            {error}
          </Box>
        )}
        {displayedTestimonials.map((testimonial, index) => (
          <Box
            key={index}
            p={6}
            // shadow="lg"

            borderWidth="0"
            borderRadius=".3rem"
            borderColor={darkMode ? "black" : "white"}
            w="48%"
            mb={8}
            boxShadow="0 0 5px #ea4886"
            className="testimonialsIndex"
          >
            <Flex alignItems="center" mb={4}>
              <Image
                borderRadius="full"
                boxSize="80px"
                src={urlFor(testimonial.image).url()}
                alt={testimonial.name}
                mr={4}
              />

              <Box>
                <Text color={darkMode ? "black" : "white"} size="md">
                  <b>Name: </b> {testimonial.name}
                </Text>
                <Text color={darkMode ? "black" : "white"}>
                  <b>Profession: </b> {testimonial.profession}
                </Text>
                <Text color={darkMode ? "black" : "white"}>
                  <b>Country: </b> {testimonial.country}
                </Text>
              </Box>
            </Flex>
            <Text color={darkMode ? "black" : "white"}>
              {testimonial.message}
            </Text>
            <Flex justify="space-between" flexWrap="wrap" mt={4}>
              {/* <Text>Rating: {testimonial.rating}</Text> */}
              <Flex align="center">
                <ReactStars
                  count={5}
                  value={testimonial.rating}
                  half={true}
                  size={18}
                  color2={'#ea4886 '}
                  edit={false}
                />
                <Text fontSize="xs" mx="1">
                  {testimonial.rating}/5
                </Text>
              </Flex>
              <Link  overflow='hidden' maxWidth="100%" href={`mailto:${testimonial.email}`}>
                <Button maxWidth="100%" color="brand.primary">{testimonial.email}</Button>
              </Link>
            </Flex>
          </Box>
        ))}
        {testimonials.length > 4 && (
          <Box
            w="full"
            mt={4}
            display="flex"
            gap="1rem"
            justifyContent="center"
            className="ButtonTest"
          >
            <Button
              onClick={toggleShowAll}
              colorScheme="brand"
              boxShadow="0 0 5px #ea4886"
              w="calc(100% - 205px)"
              bg="brand.primary"
              color="white"
              borderRadius=".3rem"
              _hover={{opacity:".7"}}
              
            >
              ~~~~ {showAll ? "See Less" : (`See All ${testimonials.length}`)} ~~~~
              {/* hit me */}
            </Button>

            {showTestimonialForm ? <Button
              colorScheme="brand"
              boxShadow="0 0 5px #ea4886"
              width="fit-content"
              bg="brand.primary"
              color="white"
              borderRadius=".3rem"
              onClick={toggleTestimonialForm}
              style={{position:"fixed", bottom:"3rem", left:".5rem", zIndex:"101"}}
              _hover={{opacity:".7"}}
              className="closee"
            >
             {/* <BsCart4 /> */}
             <BsXLg />
            </Button> : <Button
              colorScheme="brand"
              boxShadow="0 0 5px #ea4886"
              w="200px"
              bg="brand.primary"
              color="white"
              _hover={{opacity:".7"}}
              borderRadius=".3rem"
              onClick={toggleTestimonialForm}
            >
             Add Testimonial
            </Button>}
            
          </Box>
        )}
      </Flex>
    </>
  );
};

export default TestimonialSlider;
