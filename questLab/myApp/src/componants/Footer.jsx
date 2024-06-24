import { Box, Img, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  AOS.init();
  return (
    <Box backgroundColor={"#0d0d0d"} mt={"150px"} p={5}>
      <Box
        data-aos="fade-up"
        data-aos-duration="1000"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        maxWidth="1250px"
        margin="auto"
        justifyContent={{ base: "center", md: "space-between" }}
        gap={{ base: "50px", md: "0px" }}
        paddingTop="80px"
        paddingBottom={{ base: "12px", md: "100px" }}
        borderBottom="0.2px solid #939393"
        lineHeight={"8px"}
        backgroundColor={"#0d0d0d"}
        p={5}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="3"
          width={{ base: "100%", md: "50%" }}
          backgroundColor={"#0d0d0d"}
        >
          <Img
            width={8}
            src="https://www.questlabs.ai/assets/brandLogo-_2OygUFf.png"
            alt="logo"
            backgroundColor={"#0d0d0d"}
          />
          <Text
            color="white"
            fontSize={"14px"}
            lineHeight={"20px"}
            fontWeight="normal"
            fontFamily="figtree, sans-serif"
            backgroundColor={"#0d0d0d"}
          >
            Quest Labs INC
          </Text>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr 1fr 1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: "12", md: "16" }}
          width="full"
          maxWidth={{ base: "100%", md: "2/3" }}
          backgroundColor={"#0d0d0d"}
        >
          <Box
            fontSize="sm"
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={{ base: "2", md: "6", lg: "6" }}
            color={"#a0a0a0"}
            backgroundColor={"#0d0d0d"}
            lineHeight={"20px"}
          >
            <Text color={"white"} backgroundColor={"#0d0d0d"}>
              Resources
            </Text>
            <Text backgroundColor={"#0d0d0d"}>Blog</Text>
            <Text backgroundColor={"#0d0d0d"}>NewsLetter</Text>
            <Text backgroundColor={"#0d0d0d"}>PlayBook</Text>
            <Text backgroundColor={"#0d0d0d"}>Docs</Text>
          </Box>
          <Box
            fontSize="sm"
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={{ base: "2", md: "6", lg: "6" }}
            color={"#a0a0a0"}
            backgroundColor={"#0d0d0d"}
            lineHeight={"20px"}
          >
            <Text color={"white"} backgroundColor={"#0d0d0d"}>
              Support
            </Text>
            <Text backgroundColor={"#0d0d0d"}>Contact</Text>
            <Text backgroundColor={"#0d0d0d"}> Join Quest Club</Text>
            <Text backgroundColor={"#0d0d0d"}>Sales Partner</Text>
          </Box>
          <Box
            fontSize="sm"
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={{ base: "2", md: "6", lg: "6" }}
            color={"#a0a0a0"}
            backgroundColor={"#0d0d0d"}
            lineHeight={"20px"}
          >
            <Text color={"white"} backgroundColor={"#0d0d0d"}>
              Legal
            </Text>
            <Text backgroundColor={"#0d0d0d"}>Privacy Policy</Text>
            <Text backgroundColor={"#0d0d0d"}>Terms of Use</Text>
            <Text backgroundColor={"#0d0d0d"}>Cookies Policy</Text>
          </Box>
        </Box>
      </Box>

      <Box
        py="8"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap="8"
        maxWidth="1250px"
        margin="auto"
        color={"#e6e6e6"}
        fontFamily={"figtree, sans-serif"}
        backgroundColor={"#0d0d0d"}
        textAlign={{ base: "center", md: "center" }}
        width="100%"
        borderTop={"0.2px solid #939393"}
      >
        <Text
          width={{ base: "100%", md: "auto" }}
          margin={"auto"}
          backgroundColor={"#0d0d0d"}
        >
          @ 2022 Quest Labs. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
