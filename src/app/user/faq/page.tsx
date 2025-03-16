import { MainWrapper } from "@/components/ui/MainBackground/MainContainer";

import { Box, VStack, Text,} from "@chakra-ui/react";
import {ShieldCheck} from 'lucide-react'
export default function Faq() {
  return (
    <MainWrapper>
      <Box
        height={["auto", "80%"]} // Compact height
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="#000" // Dark background
        padding={[4, 6]} // Compact padding
       
      >
        <Box
          width={["90%", "70%"]} // Compact width
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4} // Compact gap
        >
          {/* FAQ Header */}
          <Text
            fontSize={["18px", "24px"]} // Smaller font size
            fontFamily="Roboto"
            color="white"
            display="flex"
            alignItems="center"
            gap={2} // Small gap between text and icon
            fontWeight="medium" // Medium weight for a cleaner look
          >
            Bet Phile FAQs <ShieldCheck size={24} color="#1B9DDA" />{" "}
            {/* Smaller icon */}
          </Text>

          {/* FAQ Items */}
          <VStack width="100%">
            {/* FAQ 1 */}
            <Box
              width="100%"
              bgColor="gray.800" // Darker background for each FAQ item
              borderRadius="md" // Rounded corners
              padding={3} // Compact padding
            >
              <Text
                fontSize={["14px", "16px"]} // Smaller font size
                fontFamily="Poppins"
                color="white"
                fontWeight="semibold" // Semibold for a clean look
              >
                1. What is Bet Phile?
              </Text>
              <Text
                fontSize={["10px", "12px"]} // Smaller font size
                fontFamily="Poppins"
                color="gray.400"
                marginTop={1} // Compact spacing between question and answer
                lineHeight="tall" // Improved readability
              >
                Bet Phile is an awareness platform dedicated to promoting safe
                and legal betting. We educate users about responsible gambling
                and recommend trusted, licensed betting sites to ensure a secure
                experience.
              </Text>
            </Box>

            {/* FAQ 2 */}
            <Box width="100%" bgColor="gray.800" borderRadius="md" padding={3}>
              <Text
                fontSize={["14px", "16px"]}
                fontFamily="Poppins"
                color="white"
                fontWeight="semibold"
              >
                2. How can I ensure I'm betting safely?
              </Text>
              <Text
                fontSize={["10px", "12px"]}
                fontFamily="Poppins"
                color="gray.400"
                marginTop={1}
                lineHeight="tall"
              >
                Always use licensed and regulated betting platforms. Set a
                budget, avoid chasing losses, and take advantage of responsible
                gambling tools like self-exclusion and deposit limits.
              </Text>
            </Box>

            {/* FAQ 3 */}
            <Box width="100%" bgColor="gray.800" borderRadius="md" padding={3}>
              <Text
                fontSize={["14px", "16px"]}
                fontFamily="Poppins"
                color="white"
                fontWeight="semibold"
              >
                3. Which betting sites are safe and legal?
              </Text>
              <Text
                fontSize={["10px", "12px"]}
                fontFamily="Poppins"
                color="gray.400"
                marginTop={1}
                lineHeight="tall"
              >
                We recommend platforms like [Site A], [Site B], and [Site C].
                These sites are fully licensed, regulated, and prioritize user
                safety and fair play.
              </Text>
            </Box>

            {/* FAQ 4 */}
            <Box width="100%" bgColor="gray.800" borderRadius="md" padding={3}>
              <Text
                fontSize={["14px", "16px"]}
                fontFamily="Poppins"
                color="white"
                fontWeight="semibold"
              >
                4. What should I do if I feel I'm losing control?
              </Text>
              <Text
                fontSize={["10px", "12px"]}
                fontFamily="Poppins"
                color="gray.400"
                marginTop={1}
                lineHeight="tall"
              >
                If you feel gambling is becoming a problem, seek help
                immediately. Use self-exclusion tools on betting platforms or
                contact organizations like Gamblers Anonymous for support.
              </Text>
            </Box>

            {/* FAQ 5 */}
            <Box width="100%" bgColor="gray.800" borderRadius="md" padding={3}>
              <Text
                fontSize={["14px", "16px"]}
                fontFamily="Poppins"
                color="white"
                fontWeight="semibold"
              >
                5. How do I verify if a betting site is licensed?
              </Text>
              <Text
                fontSize={["10px", "12px"]}
                fontFamily="Poppins"
                color="gray.400"
                marginTop={1}
                lineHeight="tall"
              >
                Check the website's footer for licensing information. Look for
                logos or links to regulatory bodies like the UK Gambling
                Commission, Malta Gaming Authority, or other recognized
                authorities.
              </Text>
            </Box>

            {/* FAQ 6 */}
            <Box width="100%" bgColor="gray.800" borderRadius="md" padding={3}>
              <Text
                fontSize={["14px", "16px"]}
                fontFamily="Poppins"
                color="white"
                fontWeight="semibold"
              >
                6. What are the signs of problem gambling?
              </Text>
              <Text
                fontSize={["10px", "12px"]}
                fontFamily="Poppins"
                color="gray.400"
                marginTop={1}
                lineHeight="tall"
              >
                Signs include spending more money or time than intended, lying
                about gambling, chasing losses, and neglecting responsibilities.
                If you notice these signs, seek help immediately.
              </Text>
            </Box>

            
          </VStack>
        </Box>
      </Box>
    </MainWrapper>
  );
}
