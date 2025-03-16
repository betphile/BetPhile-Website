'use client'
import { Box, HStack, Button,Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import Link from 'next/link'

import { Menu } from "lucide-react";
export const GetNavbar=()=> {
  const [Hamburger,setHamburger] = useState(false)
  const NavItems = [
    "Home",
    "AboutUs",
    "ContactUs",
    "FAQ",
  ];
  const Url = ['/home','/about-us',"/contact-us","/faq"]


 function IsClicked(){
  if(Hamburger){
    setHamburger(false)
  }
  else{
    setHamburger(true)
  }
 }

  return (
    <Box position={["sticky"]} top={["0"]} left={["0"]} zIndex={["1"]}>
      <Box
        height={["40px", "60px"]}
        width={["100%", "100%"]}
        bgColor="gray.800"
        borderBottom="1px solid"
        borderColor="#18282b"
      >
        <HStack
          height="100%"
          display="flex"
          justifyContent="space-between"
          padding={["0px 3px", "0px 10px"]}
          alignItems="center"
        >
          <Image
            height={["30px", "40px", "45px"]}
            src="/Logo.jpeg"
            alt=""
            borderRadius="40px"
          ></Image>

          <Button
            height="25px"
            width="25px"
            bgColor={["#1E1E1E"]}
            color={"#fff"}
            border={["1px solid #18282b"]}
            display={["block flex", "none"]}
            onClick={() => {
              IsClicked();
            }}
          >
            <Menu />
          </Button>
          <Box
            width="40%"
            display={["none", "block flex"]}
            justifyContent="space-between"
            alignItems="center"
          >
            {NavItems.map((data, index) => (
              <Box
                key={index}
                fontFamily="Poppins"
                letterSpacing="1px"
                fontSize={["10px", "11px", "12px", "13px", "18px"]}
                _hover={{
                  color: "#1B9DDA",
                  borderBottom: "1px solid #1B9DDA",
                }}
                transition="1s ease-in-out"
                color="gray.200"
              >
                <Link href={`/user/${Url[index]}`}>{data}</Link>
              </Box>
            ))}
          </Box>
        </HStack>
      </Box>
      {Hamburger ? (
        <Box
          width="100%"
          display={["block flex", "none"]}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          zIndex={1}
          bgColor={["#121212"]}
        >
          {NavItems.map((data, index) => (
            <Box
              key={index}
         
              width={["100%"]}
              textAlign={["center"]}
            >
              <Link href={`/user/${Url[index]}`}>
                <Text
                  fontFamily={["Poppins"]}
                  letterSpacing={["1px"]}
                  borderBottom={["1px solid #18282b"]}
                  padding={["10px 0px"]}
                >
                  {data}
                </Text>
              </Link>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}
