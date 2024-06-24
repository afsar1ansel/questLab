import { Box, CardHeader, Heading, Img, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AiFind() {
  AOS.init();
    return (
      <div>
        <Box
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={0}
          width={{ base: "300px", md: "450px", lg: "647px" }}
          position={"relative"}
          mt={{ base: "50px", md: "100px", lg: "150px" }}
          mb={{ base: "50px", md: "100px", lg: "150px" }}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <Heading
            color={"white"}
            textAlign={"center"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={"semibold"}
            fontFamily={"figtree, sans-serif"}
            lineHeight={{ base: "40px", md: "50px" }}
            letterSpacing={"0.02em"}
            width={{ base: "300px", md: "450px", lg: "647px" }}
            margin={"auto"}
          >
            Let our AI find the best ways to engage & convert your users
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight={"normal"}
            lineHeight={{ base: "24px", md: "28px" }}
            color={"#b9b9b9"}
            fontFamily={"figtree, sans-serif"}
            mt={"1rem"}
            m={"auto"}
          >
            Generate Personalized In-App Text, Image, UI at Scale for Millions
            of Users without engineering team
          </Text>
        </Box>
        <Box
          display={{ md: "flex" }}
          justifyContent={"center"}
          flexDirection={{ base: "coloum-reverse", md: "coloum" }}
          alignItems={"center"}
          width={"100%"}
        >
          <Img
            // width={"80%"}
            margin={"auto"}
            src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg"
            alt="logo"
            data-aos="fade-up"
            data-aos-duration="3000"
          />
          <Box
            width={{ base: "100%", md: "38%", lg: "38%" }}
            display={"flex"}
            flexDirection={"column"}
            mt={"1rem"}
            paddingLeft={{ base: "20px", md: "85px" }}
            paddingRight={{ base: "20px", md: "85px" }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Heading
              color={"white"}
              fontFamily={"figtree, sans-serif"}
              fontSize={{ base: "1.25rem", md: "30px" }}
              textAlign={"start"}
              fontWeight={500}
            >
              AI generated mini-segments to target in active user
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={"normal"}
              lineHeight={{ base: "24px", md: "28px" }}
              color={"#b9b9b9"}
              fontFamily={"figtree, sans-serif"}
              mt={"1rem"}
            >
              Our analytical models find common traits for users that are not
              active and creates thousands of segments to activate them
            </Text>
          </Box>
        </Box>

        <Box
          display={{ md: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          mt={"5rem"}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Box
            width={{ base: "100%", md: "38%", lg: "38%" }}
            display={"flex"}
            flexDirection={"column"}
            mt={"1rem"}
            paddingLeft={{ base: "20px", md: "85px" }}
            paddingRight={{ base: "20px", md: "85px" }}
            // data-aos="fade-up-right"
          >
            <Heading
              color={"white"}
              fontFamily={"figtree, sans-serif"}
              fontSize={{ base: "1.25rem", md: "30px" }}
              textAlign={"start"}
              fontWeight={500}
            >
              Our models generate AI variants to optimize text, images, and UI
              layouts for each segment.
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={"normal"}
              lineHeight={{ base: "24px", md: "28px" }}
              color={"#b9b9b9"}
              fontFamily={"figtree, sans-serif"}
              mt={"1rem"}
              mb={"1rem"}
            >
              Easily find winning variants among millions of variants to power
              users across the customer journey
            </Text>
          </Box>
          <Img
            margin={"auto"}
            src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg"
            alt="logo"
            // data-aos="fade-up-left"
          />
        </Box>
      </div>
    );

}
