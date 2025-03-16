"use client";
import {
  Image,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Input,Link,
} from "@chakra-ui/react";
import { MainWrapper } from "@/components/ui/MainBackground/MainContainer";
import {
  ShieldCheck,
  MoveRight,
  MoveLeft,
  Send,
  Youtube,
  Instagram,
} from "lucide-react";
export default function Homepage() {
  return (
    <MainWrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={["50%", "70%"]}
        width="100%"
        // bgColor={["#fff"]}
      >
        <HStack
          display="flex"
          justifyContent={["space-around", "center"]}
          flexDirection={["column", ""]}
          width={["80%", "95%"]}
          height={["80%", "100%"]}
        >
          <Image
            opacity={0.2}
            position={"absolute"}
            zIndex={-1}
            src="/bgc.jpg"
            height={["50%", "70%"]}
            width="100%"
            backgroundSize={"contain"}
          ></Image>
          <Box
            height={["50%", "30%", "40%", "50%"]}
            width={["100%", "80%", "50%", "40%"]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image src="/Logo.jpeg" height={"40%"} borderRadius={["80px"]}></Image>
            <Text
              fontSize={["35px", "70px"]}
              fontFamily={["Poppins"]}
              fontWeight={900}
              letterSpacing={1}
              color={["#fff"]}
            >
              BET PHILE
            </Text>
            <Text
              width={["80%", "100%"]}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="body"
              padding={["30px 0px", "50px 0px"]}
              fontSize={["10px", "12px", "12px"]}
              textAlign="center"
              color={"gray.400"}
              fontStyle="italic"
            >
              "BetPhile is dedicated to providing a safe and legal betting
              experience. We partner with licensed platforms to ensure
              transparency and security while promoting responsible betting
              practices. Our mission is to empower users with the knowledge and
              tools to bet responsibly and confidently."
            </Text>
            <Box
              display={["flex"]}
              width={["90%"]}
              justifyContent={["center"]}
              alignItems={"center"}
              gap={[1]}
            >
              <Input
                placeholder="example123@gmail.com"
                color={"gray.300"}
                border={"1px solid #fff"}
                height={["25px", "40px"]}
                width={["200px", "500px"]}
                fontSize={["12px", "18px"]}
              ></Input>
              <Button
                bgColor="blue.500"
                color="#fff"
                fontFamily="Poppins"
                letterSpacing="0.5px"
                height={["25px", "40px"]}
                width={["auto"]}
                fontSize={["12px", "18px"]}
                _hover={{ bg: "blue.400" }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </HStack>
      </Box>
      <Box
        height={["50%", "70%"]}
        width={["100%"]}
        display={["flex"]}
        alignItems={["center"]}
        justifyContent={["center"]}
        gap={[2, 3]}
        flexDirection={["row"]}
        bgColor={"#fff"}
      >
        <Button
          bgColor={"#121212"}
          borderRadius={"40px"}
          display={["none", "flex"]}
          color={"#fff"}
        >
          <MoveLeft />
        </Button>
        <VStack
          opacity={0.8}
          display={["flex"]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={["40%", "70%"]}
          width={["30%", "24%"]} // Responsive width
          gap={[3, 6]} // Adds consistent spacing between child elements
          bgColor="#121212" // Light background for contrast
          borderRadius="lg" // Rounded corners
          padding={6} // Adds padding inside the container
          boxShadow="md"
          // Subtle shadow for depth
        >
          {/* Header */}
          <HStack
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4} // Consistent gap between elements
          >
            <Text
              fontFamily="Poppins"
              fontSize={["12px", "32px"]} // Responsive font size
              fontWeight="bold"
              color="gray.200"
            >
              Join Us On
            </Text>
          </HStack>

          {/* Telegram Logo and Text */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Text
              fontFamily="Poppins"
              fontSize={["10px", "20px"]} // Responsive font size
              color="gray.400"
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={[1, 2]}
            >
              Youtube <Youtube size={18} />
            </Text>
            <Image
              src="/Logo.jpeg"
              height={["30px", "150px"]} // Responsive image size
              width={["30px", "150px"]} // Ensures the image is square
              borderRadius="full" // Makes the image circular
              boxShadow="lg" // Adds a subtle shadow to the image
              alt="Telegram Logo"
            />
          </Box>

          {/* Channel Link Button */}
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="https://www.youtube.com/@BetPhileFootballBettingTips">
              <Button
                width={["60px", "180px"]} // Responsive button width
                height={["20px", "48px"]} // Fixed height for consistency
                fontSize={["8px", "16px"]} // Responsive font size
                bgColor="blue.500" // Primary color for the button
                color="white"
                _hover={{ bgColor: "blue.600" }} // Darker shade on hover
                _active={{ bgColor: "blue.700" }} // Even darker shade on click
                borderRadius="md" // Slightly rounded corners
                boxShadow="md" // Subtle shadow for depth
                // Telegram icon on the left
              >
                Channel Link
              </Button>
            </Link>
          </Box>
        </VStack>
        <VStack
          display={["flex"]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={["43%", "80%"]}
          width={["33%", "29%"]} // Responsive width
          gap={[3, 6]} // Adds consistent spacing between child elements
          bgColor="#121212" // Light background for contrast
          borderRadius="lg" // Rounded corners
          padding={6} // Adds padding inside the container
          boxShadow="md"
          // Subtle shadow for depth
        >
          {/* Header */}
          <HStack
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4} // Consistent gap between elements
          >
            <Text
              fontFamily="Poppins"
              fontSize={["12px", "32px"]} // Responsive font size
              fontWeight="bold"
              color="gray.200"
            >
              Join Us On
            </Text>
          </HStack>

          {/* Telegram Logo and Text */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Text
              fontFamily="Poppins"
              fontSize={["10px", "20px"]} // Responsive font size
              color="gray.400"
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              gap={[1, 2]}
            >
              Telegram
              <Send size={18} />
            </Text>
            <Image
              src="/Logo.jpeg"
              height={["30px", "150px"]} // Responsive image size
              width={["30px", "150px"]} // Ensures the image is square
              borderRadius="full" // Makes the image circular
              boxShadow="lg" // Adds a subtle shadow to the image
              alt="Telegram Logo"
            />
          </Box>

          {/* Channel Link Button */}
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="https://t.me/+L9OeeHRDgmRjYjRl">
              <Button
                width={["60px", "180px"]} // Responsive button width
                height={["20px", "48px"]} // Fixed height for consistency
                fontSize={["8px", "16px"]} // Responsive font size
                bgColor="blue.500" // Primary color for the button
                color="white"
                _hover={{ bgColor: "blue.600" }} // Darker shade on hover
                _active={{ bgColor: "blue.700" }} // Even darker shade on click
                borderRadius="md" // Slightly rounded corners
                boxShadow="md" // Subtle shadow for depth
                // Telegram icon on the left
              >
                Channel Link
              </Button>
            </Link>
          </Box>
        </VStack>
        <VStack
          opacity={0.8}
          display={["flex"]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={["40%", "70%"]}
          width={["30%", "24%"]} // Responsive width
          gap={[3, 6]} // Adds consistent spacing between child elements
          bgColor="#121212" // Light background for contrast
          borderRadius="lg" // Rounded corners
          padding={6} // Adds padding inside the container
          boxShadow="md"
          // Subtle shadow for depth
        >
          {/* Header */}
          <HStack
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4} // Consistent gap between elements
          >
            <Text
              fontFamily="Poppins"
              fontSize={["12px", "32px"]} // Responsive font size
              fontWeight="bold"
              color="gray.200"
            >
              Join Us On
            </Text>
          </HStack>

          {/* Telegram Logo and Text */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Text
              fontFamily="Poppins"
              fontSize={["10px", "20px"]} // Responsive font size
              color="gray.400"
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={[1, 2]}
            >
              Instagram <Instagram size={18}/>           
               </Text>
            <Image
              src="/Logo.jpeg"
              height={["30px", "150px"]} // Responsive image size
              width={["30px", "150px"]} // Ensures the image is square
              borderRadius="full" // Makes the image circular
              boxShadow="lg" // Adds a subtle shadow to the image
              alt="Telegram Logo"
            />
          </Box>

          {/* Channel Link Button */}
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              width={["60px", "180px"]} // Responsive button width
              height={["20px", "48px"]} // Fixed height for consistency
              fontSize={["8px", "16px"]} // Responsive font size
              bgColor="blue.500" // Primary color for the button
              color="white"
              _hover={{ bgColor: "blue.600" }} // Darker shade on hover
              _active={{ bgColor: "blue.700" }} // Even darker shade on click
              borderRadius="md" // Slightly rounded corners
              boxShadow="md" // Subtle shadow for depth
              // Telegram icon on the left
            >
              Channel Link
            </Button>
          </Box>
        </VStack>
        <Button
          bgColor={"#121212"}
          borderRadius={"40px"}
          display={["none", "flex"]}
          color={"#fff"}
        >
          <MoveRight />
        </Button>
      </Box>
      <Box
        height={["auto", "70%"]} // Responsive height
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={["column", "row"]}
        bgColor="whiteAlpha.900" // Light background for contrast
        padding={[4, 8]} // Responsive padding
      >
        <VStack
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width={["90%", "80%"]} // Responsive width
          gap={6} // Consistent spacing between elements
        >
          {/* Header */}
          <HStack
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4} // Consistent gap
          >
            <Text
              fontFamily="Poppins"
              fontSize={["24px", "32px"]} // Responsive font size
              fontWeight="bold"
              color="gray.800"
              textAlign="center"
            >
              How to Play Safe Betting and Use Legal Sites Only
            </Text>
          </HStack>

          {/* Content */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontFamily="Poppins"
            fontSize={["12px", "16px"]} // Responsive font size
            color="gray.600"
            textAlign="left"
            lineHeight="tall" // Improved readability
            width="100%"
          >
            <p>
              Betting can be fun and exciting, but it’s important to play
              responsibly and use only legal and trusted platforms. Here’s how
              you can stay safe:
              <br></br>
              <br></br>✅ **Choose Licensed Platforms**: Always use betting
              sites that are licensed and regulated by recognized authorities.
              This ensures fair play and legal compliance.<br></br>✅ **Set a
              Budget**: Decide how much you can afford to lose and stick to it.
              Never chase losses.<br></br>✅ **Understand the Rules**:
              Familiarize yourself with the rules of the games or sports you’re
              betting on.<br></br>✅ **Avoid Impulsive Bets**: Make informed
              decisions rather than betting on impulse.<br></br>✅ **Use Secure
              Payment Methods**: Only use trusted and secure payment options for
              deposits and withdrawals.<br></br>✅ **Check for Responsible
              Gambling Tools**: Look for platforms that offer self-exclusion,
              deposit limits, and other responsible gambling features.<br></br>
              ✅ **Stay Informed**: Keep up-to-date with the latest regulations
              and guidelines for online betting in your region.<br></br>✅
              **Seek Help if Needed**: If you feel that betting is becoming a
              problem, seek help from professional organizations that specialize
              in gambling addiction.<br></br>
            </p>
          </Box>

          {/* Buttons */}
          <Box
            fontFamily="Rubik"
            display="flex"
            alignItems="center"
            gap={4} // Consistent gap
            width="100%"
            justifyContent="center"
            flexDirection={["column", "row"]} // Responsive button layout
          >
            <Button
              width={["120px", "150px"]} // Responsive button width
              height="48px" // Fixed height for consistency
              fontSize={["12px", "16px"]} // Responsive font size
              bgColor="blue.500" // Primary color
              color="white"
              _hover={{ bgColor: "blue.600" }} // Darker shade on hover
              _active={{ bgColor: "blue.700" }} // Even darker shade on click
              borderRadius="md" // Slightly rounded corners
              boxShadow="md" // Subtle shadow for depth
            >
              Learn More
            </Button>
            <Button
              width={["120px", "150px"]} // Responsive button width
              height="48px" // Fixed height for consistency
              fontSize={["12px", "16px"]} // Responsive font size
              bgColor="green.500" // Secondary color
              color="white"
              _hover={{ bgColor: "green.600" }} // Darker shade on hover
              _active={{ bgColor: "green.700" }} // Even darker shade on click
              borderRadius="md" // Slightly rounded corners
              boxShadow="md" // Subtle shadow for depth
            >
              Legal Sites
            </Button>
          </Box>
        </VStack>
      </Box>
      <Box
        height={["70%", "60%"]}
        width={["100%"]}
        bgColor="#fff"
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        <VStack
          height={["100%"]}
          width={["100%"]}
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["", "space-around"]}
          alignItems={["center"]}
        >
          <Box
            height={["10%"]}
            width={["80%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
          >
            <Text
              fontFamily={["Poppins"]}
              fontSize={["30px", "40px"]}
              letterSpacing={["1px"]}
              textAlign={["center"]}
              color={["gray.700"]}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={["10px"]}
              fontWeight={800}
              borderBottom={"3px solid black"}
            >
              Our Videos
            </Text>
          </Box>
          <Box
            height={["60%"]}
            width={["90%", "90%"]}
            display={["flex"]}
            flexDirection={["column", "row"]}
            justifyContent={["space-around"]}
            alignItems={["center"]}
            gap={[10]}
          >
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.300"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.200", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <iframe
                width="90%"
                height="90%"
                src="https://www.youtube.com/embed/aozjCfwv_k8"
                title="Best Online Betting App for Cricket Betting - 100% Safe and Legal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Box>
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.300"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.200", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <iframe
                width="90%"
                height="90%"
                src="https://www.youtube.com/embed/HZ6FCPiWzyA"
                title="1xbet Cricket Betting tips in Hindi | Online cricket betting tricks to win | Online betting strategy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Box>
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.300"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.200", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <iframe
                width="90%"
                height="90%"
                src="https://www.youtube.com/embed/Kgcn8e8DtN8"
                title="1xbet Reality : Best online betting app in India? Online cricket betting apps in India"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        </VStack>
      </Box>
      <Box
        height={["auto", "50%"]} // Compact height
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="blackAlpha.200" // Dark background
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
          <VStack
            width="100%"
             // Compact spacing between FAQ items
          >
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
          </VStack>
        </Box>
      </Box>
    </MainWrapper>
  );
}
