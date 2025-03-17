import React from "react";
import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react";

export const GetFooter = () => {
  return (
    <Box bg="#121212" py={6} px={4} height={["auto", "20%"]}>
      <Flex
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["space-between"]}
        align="center"
        height={["auto", "auto"]}
      >
        {/* Navigation Links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          mb={{ base: 4, md: 0 }}
        >
          <Link href="/">| Home |</Link>
          <Link href="/user/about-us">| About Us |</Link>
          <Link href="/compliance">| Compliance |</Link>
          <Link href="/user/contact">| Contact Us |</Link>
          <Link href="https://www.gambleaware.org/home/">| Responsible Gaming |</Link>
          <Link href="/user/faq">| FAQ |</Link>
        </Stack>
      </Flex>
      {/* Legal Notice */}

      {/* Footer Bottom */}
      <Box textAlign="center" mt={4} color="gray.400">
        <Text fontSize="sm">
          Bet Phile promotes safe and legal betting | 18+ Only |
          Geo-Restrictions Apply
        </Text>
        <Text fontSize="sm" mt={2}>
          © 2025 Bet Phile. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};


