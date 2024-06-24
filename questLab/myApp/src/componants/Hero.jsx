import { Box, Button, Heading, Input, Text, Image } from "@chakra-ui/react";
import "./Hero.css";

export default function Hero() {
  return (
    <Box
      className="heroDiv"
      top={{ base: "20vh", lg: "0" }}
      position={{ base: "relative", lg: "relative" }}
    >
      <div className="hero">
        <div className="header-text">
          <Heading
            fontSize={{ base: "42px", lg: "64px" }}
            color="#FFF"
            textAlign="center"
            lineHeight={{ base: "54px", lg: "72px" }}
            fontWeight="semibold"
            fontFamily="figtree"
            width={{ base: "358px", md: "650px", lg: "940px" }}
            margin="auto"
          >
            Transform Your Product with Intelligent In-App Experiences
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "lg" }}
            color="white"
            textAlign="center"
            lineHeight={{ base: "26px", md: "28px" }}
            width={{ base: "350px", md: "618px" }}
            margin="auto"
            mt={7}
            bg="none"
          >
            Empower growth & Marketing Teams to Boost Engagement and Conversion
            10x faster without data or engineering team
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={3}
            alignItems="center"
            justifyContent="center"
            bg="none"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width={{ base: "300px", lg: "405px" }}
              my={7}
              py={3}
              pr={3}
              pl="16px"
              borderWidth="1px"
              borderColor="gray.600"
              borderRadius="xl"
              sx={{ backdropFilter: "blur(4px)" }}
            >
              <Input
                type="text"
                placeholder="Enter your email"
                bg="none"
                color="white"
                border="none"
              />
              <Button
                paddingY="6px"
                paddingX="3"
                bg="none"
                color="white"
                textAlign="center"
                fontWeight="semibold"
                fontSize="sm"
                lineHeight="20px"
                fontFamily="figtree, sans-serif"
                borderRadius="4px"
                border="1px"
                borderColor="#8C43EC"
                cursor="pointer"
                _hover={{ bg: "none" }}
              >
                Book Demo
              </Button>
            </Box>
          </Box>
        </div>
        <Box
          minH={{ base: "30vw", md: "40vw" }}
          position="relative"
          bg="none"
          width="80%"
        >
          <Image
            mt={{ base: "0px", md: "200px" }}
            w={{ base: "70%", md: "90%" }}
            margin="auto"
            borderTopLeftRadius="0.75rem"
            borderTopRightRadius="0.75rem"
            color="white"
            src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg"
            alt="heroImg"
            objectFit="cover"
            objectPosition="center"
            bg="none"
          />
        </Box>
      </div>
    </Box>
  );
}
