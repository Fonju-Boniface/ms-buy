import { useRef, useState } from "react";
import { client, urlFor } from "@utils/sanity.client";
import { Box, Flex, Heading, Text, Input, Textarea, Button, Link, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./Contact.css"

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await client.create({
        _type: 'contact',
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phone,
        // address: data.address,
        // website: data.website,
        profession: data.profession,
        country: data.country,
      });

      // Clear the form fields
      formRef.current.reset();

      // Show the success message
      setShowSuccessMessage(true);

      console.log('Contact form submitted successfully');
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg="gray.100" py={20} mt="2rem">
      <Box maxW="1200px" mx="auto" px={4}>
        <Heading mb={8} textAlign="center">
          Get in Touch
        </Heading>
        
        <Flex justify="space-between"  className="contactStyles">
          <Box flex="1" mr={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Contact Information
            </Text>
            <Flex align="center" mb={4}>
              <FaEnvelope fontSize="24px" mr={4} />
              <Text>info@example.com</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <FaPhone fontSize="24px" mr={4} />
              <Text>+1 (555) 123-4567</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <FaMapMarkerAlt fontSize="24px" mr={4} />
              <Text>123 Main Street, Anytown USA</Text>
            </Flex>
            <Link href="https://www.example.com" isExternal>
              Visit our website
            </Link>
          </Box>

          <Box flex="1" mt={[8, 0]}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Send us a message
            </Text>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email} mt={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.profession} mt={4}>
                <FormLabel htmlFor="profession">Profession</FormLabel>
                <Input
                  id="profession"
                  placeholder="Profession"
                  {...register("profession", { required: "Profession is required" })}
                />
                <FormErrorMessage>{errors.profession?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.phone} mt={4}>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input
                  id="phone"
                  placeholder="Phone e.g +1 202 xxx xxxx"
                  {...register("phone", { required: "Phone is required" })}
                />
                <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.country} mt={4}>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input
                  id="country"
                  placeholder="Country"
                  {...register("country", { required: "Country is required" })}
                />
                <FormErrorMessage>{errors.country?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.message} mt={4}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                />
                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
              </FormControl>
              <Button colorScheme="blue" type="submit" isLoading={isSubmitting} mt={4}>
                Submit
              </Button>
            </form>
            {showSuccessMessage && (
          <Box mt={3}>
            <Text color="green.500" fontWeight="bold">
              Thank you for your message! We'll get back to you soon.
            </Text>
          </Box>
        )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;