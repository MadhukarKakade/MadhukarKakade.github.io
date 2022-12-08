import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRef } from "react";

const Links = ["About Me", "Skills", "Project", "Contact & Resume"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visible, setvisible] = useState({ hove: "false", nav: "" });

  const handleHover = (link) => {
    setvisible({ ...visible, hove: link });
  };
  console.log(visible);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={40} alignItems={"center"}  fontWeight="700" color="gray.500">
            <Link to="/"  onClick={() => {
                      setvisible({ ...visible, nav: false });
                    }}>Home</Link>
            <HStack
              as={"nav"}
              spacing={30}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link} to={"/" + link.split(" ", 1)}>
                  <Box
                 
                    color={link == visible.nav ? "orange.400" : ""}
                    onClick={() => {
                      setvisible({ ...visible, nav: link });
                    }}
                    onMouseEnter={() => handleHover(link)}
                    onMouseLeave={() => handleHover(false)}
                    _before={{
                      content: '""',
                      position: "absolute",
                      backgroundColor:link===visible.nav? "blue.500":"blue.200",
                      height: " 2px",
                      // top= "100%"
                      width: link === visible.hove ||link===visible.nav ? "100%" : "0%",
                      left: "50%",
                      bottom: "-10px",
                      transition: " width .3s, ease-in-out   transform",
                      transform: "translate(-50%, -50%)",
                    }}
                    position="relative"
                  >
                    {link}
                  </Box>
                </Link>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}> */}
          <Avatar
            size={"sm"}
            src={
              "https://ca.slack-edge.com/T049JC010P9-U04ARFKMAHL-92937c2b8633-72"
            }
          />
          {/* </MenuButton> */}
          {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
          {/* </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link}
                  onClick={isOpen ? onClose : onOpen}
                  to={"/" + link.split(" ", 1)}
                >
                  <Box
                    _hover={{ bg: "orange.100" }}
                    color={link == visible.nav ? "blue" : ""}
                    onClick={() => {
                      setvisible({ ...visible, nav: link });
                    }}
                  >
                    {link}
                  </Box>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
