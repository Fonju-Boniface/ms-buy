import React, { useState } from 'react';
import { client } from '@utils/sanity.client';
import { Box, Flex, Input, Textarea, Button, Image, Text, Heading } from '@chakra-ui/react';
import ReactStars from 'react-stars';
import { useTheme } from "@/ThemeContext";

const TestimonialForm = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const imageAsset = await client.assets.upload('image', image);

      const doc = {
        _type: 'testimonials',
        name,
        profession,
        email,
        rating,
        message,
        country,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
      };

      await client.create(doc);

      // Reset form fields
      setName('');
      setProfession('');
      setEmail('');
      setRating(0);
      setMessage('');
      setCountry('');
      setImage(null);
      setImageUrl('');
      setIsSubmitted(true);
      setError(null);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setImageUrl(URL.createObjectURL(selectedImage));
  };
  const { darkMode } = useTheme();

  return (
    <Box w="100%" minW="100%" mt={10} height="100vh" position="fixed" zIndex="100" bottom="0" style={{display:"flex", justifyContent:"flex-start", alignItems:"center", flexDirection:"column", gap:"1rem", overflow:"auto", paddingBottom:"4rem"}} paddingTop={{ base: "120px", xl: "80px" }} bg={darkMode ? "white" : "black"}
    className="TestForm"
    left="0">
        {/* bg={darkMode ? "black" : "white"} */}
        {error && (
            <Text color="red.500" mb={4}>
              {error}
            </Text>
          )}
          <Heading mb="2rem" mt="2rem" color="brand.primary">
            Add your own testimony
          </Heading>
      <form onSubmit={handleSubmit} style={{width: "400px"}}>
        <Flex direction="column" gap={4}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            color={darkMode ? "black" : "white"}
          />
          <Input
            placeholder="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            color={darkMode ? "black" : "white"}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color={darkMode ? "black" : "white"}
          />
          <Flex>
            <ReactStars
                count={5}
                onChange={(newRating) => setRating(newRating)}
                value={rating}
                size={24}
                color2={'#ea4886 '}
            />
            <Text color={darkMode ? "black" : "white"}>{rating}/5</Text>

          </Flex>
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{resize:"none"}}
            color={darkMode ? "black" : "white"}
          />
          <Input
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            color={darkMode ? "black" : "white"}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            color={darkMode ? "black" : "white"}
          />
          {imageUrl && (
            <Image style={{width:"100% !important", height:"auto !important"}}  src={imageUrl} alt="Uploaded testimonial image" />
          )}
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Submitting"
            colorScheme={isSubmitted ? 'green' : 'blue'}
            width="100%"
          >
            {isSubmitted ? 'Submitted' : 'Submit'}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default TestimonialForm;