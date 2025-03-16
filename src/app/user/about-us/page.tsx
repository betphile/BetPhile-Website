"use client";
"use client";
import { Image, Box, VStack, HStack, Text, Button,Link } from "@chakra-ui/react";
import { MainWrapper } from "@/components/ui/MainBackground/MainContainer";
import {Send,Youtube} from 'lucide-react'
export default function Aboutpage() {
  return (
    <MainWrapper>
      <Box
        height={["70%"]}
        width={["100%"]}
        display={["flex"]}
        alignItems={["center"]}
        justifyContent={["center"]}
        flexDirection={["column", "row"]}
        bgColor="blackAlpha.900" // Dark background
        padding={[4, 8]} // Responsive padding
      >
        <VStack
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["space-around"]}
          alignItems={["center"]}
          height={["100%"]}
          width={["80%"]}
          gap={2} // Consistent spacing
        >
          {/* Logo and Heading */}
          <HStack
            width={["100%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
            gap={["20px"]}
            flexDirection={["column", "row"]}
          >
            <Image
              src="/Logo.jpeg" // Logo path
              height={["80px", "120px"]} // Responsive logo size
              alt="Bet Phile Logo"
              borderRadius={80}
            />
            <Text
              fontFamily={["Poppins"]}
              fontSize={["28px", "40px"]} // Responsive font size
              color="white"
              textAlign="center"
            >
              What is Bet Phile?
            </Text>
          </HStack>

          {/* Description */}
          <Box
            display={["flex"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            flexDirection={["column"]}
            fontFamily={["Poppins"]}
            fontSize={["12px", "16px"]}
            color="gray.400"
            textAlign="center"
            lineHeight="tall"
            width={["100%", "80%"]}
          >
            <p>
              BetPhile is an educational platform dedicated to spreading
              awareness about safe, legal, and responsible betting practices. We
              do not promote or endorse illegal gambling sites; instead, we
              strive to inform users about the risks associated with unregulated
              platforms and help them make informed choices. Our mission is to
              empower individuals with knowledge about betting laws, fraud
              prevention, and responsible gaming strategies. We partner with
              industry experts and licensed organizations to provide accurate
              and up-to-date information, ensuring that users understand their
              rights and the importance of betting only on secure and legally
              compliant platforms. At BetPhile, we believe in ethical gaming and
              advocate for transparency, security, and user well-being. Through
              educational content, guides, and resources, we aim to create a
              safer betting environment where users can bet confidently while
              staying protected from fraudulent activities.
            </p>
          </Box>

          {/* Buttons */}
          <Box
            fontFamily={["Rubik"]}
            display={["flex"]}
            alignItems={["center"]}
            gap={["10px"]}
            width={["100%"]}
            justifyContent={["center"]}
            flexDirection={["row", "row"]} // Responsive button layout
          >
            <VStack gap={4}>
              <Link href="https://t.me/+L9OeeHRDgmRjYjRl">
                <Button
                  width={["120px", "150px"]} // Responsive button width
                  height={["32px", "48px"]} // Fixed height for consistency
                  fontSize={["12px", "16px"]} // Responsive font size
                  bgColor="#1B9DDA" // Primary color
                  color="white"
                  _hover={{ bgColor: "#1688C2" }} // Darker shade on hover
                  _active={{ bgColor: "#1472A3" }} // Even darker shade on click
                  borderRadius="md" // Slightly rounded corners
                  boxShadow="md" // Subtle shadow for depth
                >
                  Join Telegram <Send size={18} />
                </Button>
              </Link>

              <Link href="https://www.youtube.com/@BetPhileFootballBettingTips">
                <Button
                  width={["120px", "150px"]} // Responsive button width
                  height={["32px", "48px"]} // Fixed height for consistency
                  fontSize={["12px", "16px"]} // Responsive font size
                  bgColor="red.500" // Primary color
                  color="white"
                  _hover={{ bgColor: "red.400" }} // Darker shade on hover
                  _active={{ bgColor: "#1472A3" }} // Even darker shade on click
                  borderRadius="md" // Slightly rounded corners
                  boxShadow="md" // Subtle shadow for depth
                >
                  Join Youtube <Youtube size={12} />
                </Button>
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </MainWrapper>
  );
}
