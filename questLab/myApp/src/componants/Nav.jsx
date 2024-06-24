import { Box, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
} from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { AddIcon } from "@chakra-ui/icons";






export default function Nav() {

  return (
    <Box
      color="white"
      p={5}
      alignItems="center"
      // justifyContent="space-between"
      position="sticky"
      top="0"
      left="0"
      right="0"
      backdropFilter="blur(10px)"
      bg="rgba(0, 0, 0, 0.6)"
      zIndex="10"
      pl={{ base: "20px", md: "100px", lg: "100px" }}
      pr={{ base: "20px", md: "100px", lg: "100px" }}
      display={{ base: "flex", md: "flex",  lg: "flex" }}
      flexDirection="row"
      justifyContent={{ base: "space-between", md: "center", lg: "center" }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        fontSize="18px"
        fontWeight="bold"
        fontFamily="figtree, sans-serif"
        background={"transparent"}
        pl={{ base: "0px", md: "100px", lg: "100px" }}
      >
        <img
          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%20578'%3e%3cg%20id='Vector'%3e%3cpath%20d='M19.3503%200.666016V6.88824L13.128%2013.1105V6.88824H6.90582V10.9962C6.90582%2012.1642%207.85211%2013.1105%209.02008%2013.1105H13.128L6.90582%2019.3327C3.46933%2019.3327%200.683594%2016.5469%200.683594%2013.1105V0.666016H19.3503Z'%20fill='white'/%3e%3cpath%20d='M19.3503%2013.1105L13.128%2013.1105L13.128%2019.3327H19.3503V13.1105Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
          alt=""
        />
        <p>Quest</p>
      </Box>

      <Box
        display={{ base: "none", md: "none", lg: "flex" }}
        justifyContent="center"
        flex="1"
        gap={1}
        fontFamily="figtree, sans-serif"
        fontSize="14px"
        fontWeight="small"
        color="white"
        background={"transparent"}
      >
        <Button
          fontFamily="figtree, sans-serif"
          fontSize="14px"
          background="none"
          color="white"
          _hover={{ bg: "none" }}
        >
          playbook
        </Button>
        <Button
          fontFamily="figtree, sans-serif"
          fontSize="14px"
          background="none"
          color="white"
          _hover={{ bg: "none" }}
        >
          Resources
        </Button>
        <Button
          fontFamily="figtree, sans-serif"
          fontSize="14px"
          background="none"
          color="white"
          _hover={{ bg: "none" }}
        >
          Blogs
        </Button>
      </Box>

      <Box
        display={{ base: "none", md: "none", lg: "flex" }}
        gap={3}
        alignItems="center"
        pr={6}
        justifyContent="flex-end"
        background={"transparent"}
      >
        <Button
          background="none"
          border="2px"
          borderColor="purple.500"
          color="white"
          _hover={{ bg: "none" }}
          borderRadius="4px"
        >
          Get Started
        </Button>
        <Button
          style={{
            background:
              "linear-gradient(transparent, transparent) padding-box padding-box, linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843)) border-box border-box",
            border: "1px solid rgba(0, 0, 0, 0)",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box
        display={{ base: "flex", md: "flex", lg: "none" }}
        justifyContent="end"
        // flex="1"
        // gap={1}
        fontFamily="figtree, sans-serif"
        fontSize="14px"
        fontWeight="small"
        color="white"
        background={"transparent"}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            background="none"
            _hover={{ bg: "none" }}
          />
          <MenuList background="none">
            <MenuItem command="⌘T" background={"none"}>
              PlayBook
            </MenuItem>
            <MenuItem command="⌘N" background={"none"}>
              Resources
            </MenuItem>
            <MenuItem command="⌘⇧N" background={"none"}>
              Blogs
            </MenuItem>
            <MenuItem command="⌘O" background={"none"}>
              Get Started
            </MenuItem>
            <MenuItem command="⌘O" background={"none"}>
              Book Demo
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
