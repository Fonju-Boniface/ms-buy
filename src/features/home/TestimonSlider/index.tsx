import { useEffect, useState } from "react";
import { client } from "@utils/sanity.client";

import TestmonSlider from "./TestmonSlider";
import { Box, Heading } from "@chakra-ui/react";
import { useTheme } from "@/ThemeContext";
// const { darkMode } = useTheme();

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const query = '*[_type == "testimonials"]';
        const testimonialData = await client.fetch(query);
        setTestimonials(testimonialData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
  const { darkMode } = useTheme();
  return (
    <Box id="testimonials" pos="relative" className="Testimonials" w="100%" padding="3rem" bg={darkMode ? "white" : "black"} style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"1rem"}}>
      
      <Heading
      mb="2rem"
      color="brand.primary"
    >
        Welcome to the Testimonials Page
    </Heading>
      <TestmonSlider items={testimonials} />
    </Box>
  );
};

export default Testimonial;
