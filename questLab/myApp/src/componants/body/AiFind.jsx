import { Box, CardHeader, Heading, Img, Text } from "@chakra-ui/react";

export default function AiFind() {
    return (
      <div>
        <Box margin={"auto"} display={"flex"} flexDirection={"column"} gap={0} width={{ base: "300px", md: "450px", lg: "647px" }} position={"relative"} >
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
          mt={"4rem"}
          width={"100%"}
        >
          <Img
            src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg"
            alt="logo"
          />
          <Box
            width={"38%"}
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            mt={"1rem"}
            paddingLeft={{ base: "0px", md: "85px" }}
            paddingRight={{ base: "0px", md: "85px" }}
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
          mt={"4rem"}
        >
          <Box
            width={"38%"}
            display={{ base: "grid", md: "flex" }}
            flexDirection={{ base: "column", md: "row" }}
            mt={"1rem"}
            paddingLeft={{ base: "0px", md: "85px" }}
            paddingRight={{ base: "0px", md: "85px" }}
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
            >
              Easily find winning variants among millions of variants to power
              users across the customer journey
            </Text>
          </Box>
          <Img
            src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg"
            alt="logo"
          />
        </Box>
      </div>
    );

}
