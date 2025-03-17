"use client";
import {
  Image,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Link,
  
} from "@chakra-ui/react";
import { MainWrapper } from "@/components/ui/MainBackground/MainContainer";
import {
  ShieldCheck,
  Video,
  CheckIcon,
  Scale,
  ArrowBigLeft,
  ArrowBigRight
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
            height={["80%", "30%", "40%", "60%"]}
            width={["100%", "80%", "50%", "40%"]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              src="/Logo.jpeg"
              height={"40%"}
              borderRadius={["80px"]}
            ></Image>
            <Text
              fontSize={["35px", "70px"]}
              fontFamily={["Tektur"]}
              fontWeight={600}
              letterSpacing={1}
              color={["#fff"]}
            >
              BetPhile
            </Text>
            <Text
              width={["80%", "100%"]}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="body"
              padding={["30px 0px", "50px 0px"]}
              fontSize={["14px", "12px", "20px"]}
              textAlign="center"
              color={"gray.400"}
              fontStyle="italic"
            >
              "BetPhile has been in your selfless service since 2018. Join our
              community for a profitable betting journey."
            </Text>
            <Box
              display={["flex"]}
              width={["90%"]}
              justifyContent={["center"]}
              alignItems={"center"}
              gap={[1]}
            >
              {/* Nunito, Arial, sans-serif */}
              <Link href="https://t.me/+L9OeeHRDgmRjYjRl">
                <Button
                  bgColor="blue.500"
                  color="#fff"
                  fontFamily="Poppins"
                  fontWeight={800}
                  letterSpacing="1px"
                  height={["40px", "40px"]}
                  width={["250px", "auto"]}
                  fontSize={["18px", "20px"]}
                  _hover={{ bg: "blue.400" }}
                >
                  Join Us On Telegram
                </Button>
              </Link>
            </Box>
          </Box>
        </HStack>
      </Box>
      <Box
        height={["40%", "60%"]}
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
            padding={["30px 0px"]}
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

              // borderBottom={"3px solid black"}
            >
              Our Videos <Video size={40} />
            </Text>
          </Box>
          <HStack
            height={["100%"]}
            width={["100%", "90%"]}
            display={["flex"]}
            justifyContent={["center"]}
            padding={["0px 5px"]}
          >
            <Button padding={["5px 5px"]} boxShadow={"md"}>
              <ArrowBigLeft size={80} />
            </Button>
            <Box
              height={["100%"]}
              width={["80%", "90%"]}
              display={["flex"]}
              flexDirection={["row", "row"]}
              justifyContent={["flex-start"]}
              alignItems={["center"]}
              gap={[10]}
              overflowX={"auto"}
              overflowY={"hidden"}
              white-space="nowrap"
              padding={["0px 10px"]}
            >
              <Link
                href="https://www.youtube.com/embed/aozjCfwv_k8"
                height={["180px", "350px"]}
                width={["250px", "500px"]}
                flex="0 0 auto"
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
                  width="95%"
                  height="95%"
                  src="https://www.youtube.com/embed/aozjCfwv_k8"
                  title="Best Online Betting App for Cricket Betting - 100% Safe and Legal"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Link>
              <Link
                height={["180px", "350px"]}
                width={["250px", "500px"]}
                flex="0 0 auto"
                bgColor={["gray.300"]}
                borderRadius={["10px"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                _hover={{ bg: "gray.200", padding: "2px 2px" }}
                transition={["1s ease-in-out"]}
                boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
                href="https://www.youtube.com/embed/HZ6FCPiWzyA"
              >
                <iframe
                  width="95%"
                  height="95%"
                  src="https://www.youtube.com/embed/HZ6FCPiWzyA"
                  title="1xbet Cricket Betting tips in Hindi | Online cricket betting tricks to win | Online betting strategy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Link>
              <Link
                height={["180px", "350px"]}
                width={["250px", "500px"]}
                flex="0 0 auto"
                bgColor={["gray.300"]}
                borderRadius={["10px"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                _hover={{ bg: "gray.200", padding: "2px 2px" }}
                transition={["1s ease-in-out"]}
                boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
                href="https://www.youtube.com/embed/Kgcn8e8DtN8"
              >
                <iframe
                  width="95%"
                  height="95%"
                  src="https://www.youtube.com/embed/Kgcn8e8DtN8"
                  title="1xbet Cricket Betting tips in Hindi | Online cricket betting tricks to win | Online betting strategy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Link>
              <Link
                height={["180px", "350px"]}
                width={["250px", "500px"]}
                flex="0 0 auto"
                bgColor={["gray.300"]}
                borderRadius={["10px"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                _hover={{ bg: "gray.200", padding: "2px 2px" }}
                transition={["1s ease-in-out"]}
                boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
                href="https://www.youtube.com/embed/Kgcn8e8DtN8"
              >
                <iframe
                  width="95%"
                  height="95%"
                  src="https://www.youtube.com/embed/Kgcn8e8DtN8"
                  title="1xbet Cricket Betting tips in Hindi | Online cricket betting tricks to win | Online betting strategy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Link>
              <Link
                height={["180px", "350px"]}
                width={["250px", "500px"]}
                flex="0 0 auto"
                bgColor={["gray.300"]}
                borderRadius={["10px"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                _hover={{ bg: "gray.200", padding: "2px 2px" }}
                transition={["1s ease-in-out"]}
                boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
                href="https://www.youtube.com/embed/Kgcn8e8DtN8"
              >
                <iframe
                  width="95%"
                  height="95%"
                  src="https://www.youtube.com/embed/Kgcn8e8DtN8"
                  title="1xbet Cricket Betting tips in Hindi | Online cricket betting tricks to win | Online betting strategy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Link>
            </Box>
            <Button padding={["5px 5px"]} boxShadow={"md"}>
              <ArrowBigRight size={80} />
            </Button>
          </HStack>
        </VStack>
      </Box>
      <Box
        height={["120%","100%"]}
        width={["100%"]}
        bgColor={"whiteAlpha.950"}
        color={"black"}
        display={["flex"]}
        flexDirection={["column"]}
        overflow={["auto"]}
      >
        <Box
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          padding={["20px 0px"]}
          gap={[4, 1]}
        >
          <Text
            fontSize={["25px", "40px"]}
            fontFamily={["Poppins"]}
            fontWeight={600}
          >
            Legal Betting Websites
          </Text>
          <Scale size={50} />
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="1200px"
          margin="auto"
          // borderRadius="10px"
          // boxShadow="md"
          borderBottom={["1px solid black"]}
          padding={["10px 5px"]}
          gap={2}
        >
          {/* Left Side - Logo and Ratings */}
          <VStack align="flex-start">
            <Image
              src="https://www.thetopbookies.com/storage/reviews/21/logo/p9LFFIRTO8wN8envEpnP04sPMEx6kQoBDxH40o4I.webp"
              alt="1WIN"
              width="120px"
              borderRadius={8}
            />
            <HStack>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Text key={i} fontSize="20px" color="yellow.400">
                    ★
                  </Text>
                ))}
            </HStack>
          </VStack>

          {/* Middle - Promo Offer */}
          <VStack textAlign="center">
            <Text fontSize={["16px", "20px"]} fontWeight="bold">
              100% up to ₹66,000 on your 1st Deposit - Exclusive
            </Text>
            <Text fontSize={["16px", "18px"]} fontWeight="bold">
              Promo Code:{" "}
              <Text as="span" color="orange.500">
                FDBONUS
              </Text>
            </Text>
            <VStack align="flex-start" fontSize={["14px", ""]}>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Best choice for Indian Betting</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Highest odds</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Fastest withdrawal and permanent promotions</Text>
              </HStack>
            </VStack>
            <HStack>
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/3/vORF2arFblaJpj21q24WSut373QlSVzK60hWrCcJ.png"
                alt="MasterCard"
                width={["30px", "40px"]}
              />
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/4/Ejy3G4LWP68sluQLGZ5TQ9c2bQzGDzT8RtaFCUA9.webp"
                alt="Airtel"
                width={["30px", "40px"]}
              />
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/5/pd78QJrCn0hGwdUyLdbeHQPMzHeLvBZkjKsmofaC.jpeg"
                alt="UPI"
                width={["30px", "40px"]}
              />
            </HStack>
          </VStack>

          {/* Right Side - Button and Review */}
          <VStack>
            <Link href="https://megapari-100485.top/en/registration?type=email&bonus=SPORT">
              <Button
                backgroundColor="yellow.400"
                borderRadius="50px"
                padding={["0px 100px", "15px 30px"]}
                fontSize={["12px", "14px"]}
              >
                PLAY NOW
              </Button>
            </Link>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="1200px"
          margin="auto"
          borderBottom={["1px solid black"]}
          padding={["10px 5px"]}
          gap={2}
        >
          {/* Left Side - Logo and Ratings */}
          <VStack align="flex-start">
            <Image
              src="https://www.thetopbookies.com/storage/reviews/16/logo/2Ly1swLFnMcBdN9OurqJa1kSO8Objl6BKOxNSOUh.webp"
              alt="PARIMATCH"
              width="120px"
              borderRadius={8}
            />
            <HStack>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Text key={i} fontSize={["14px", "20px"]} color="yellow.400">
                    ★
                  </Text>
                ))}
            </HStack>
          </VStack>

          {/* Middle - Promo Offer */}
          <VStack textAlign="center">
            <Text fontSize={["16px", "20px"]} fontWeight="bold">
              100% up to ₹66,000 on your 1st Deposit - Exclusive
            </Text>
            <Text fontSize={["16px", "18px"]} fontWeight="bold">
              Promo Code:{" "}
              <Text as="span" color="orange.500">
                FDBONUS
              </Text>
            </Text>
            <VStack align="flex-start" fontSize={["14px", ""]}>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Best choice for Indian Betting</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Highest odds</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Fastest withdrawal and permanent promotions</Text>
              </HStack>
            </VStack>
            <HStack>
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/3/vORF2arFblaJpj21q24WSut373QlSVzK60hWrCcJ.png"
                alt="MasterCard"
                width="40px"
              />
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/4/Ejy3G4LWP68sluQLGZ5TQ9c2bQzGDzT8RtaFCUA9.webp"
                alt="Airtel"
                width="40px"
              />
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/5/pd78QJrCn0hGwdUyLdbeHQPMzHeLvBZkjKsmofaC.jpeg"
                alt="UPI"
                width="50px"
              />
            </HStack>
          </VStack>

          {/* Right Side - Button and Review */}
          <VStack>
            <Link href="https://pari-matchin.com/en/regtel/1/?qtag=a2478_t2832_c1715_s&x_pm_click=4b93af3e36f3aab46985f9e4182c0580&redirect_creative_id=1715">
              <Button
                backgroundColor="yellow.400"
                borderRadius="50px"
                padding={["0px 100px", "15px 30px"]}
                fontSize={["12px", "14px"]}
              >
                PLAY NOW
              </Button>
            </Link>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="1200px"
          margin="auto"
          borderBottom={["1px solid black"]}
          padding={["10px 5px"]}
          gap={2}
        >
          {/* Left Side - Logo and Ratings */}
          <VStack align="flex-start">
            <Image
              src="https://v1.bundlecdn.com/img/1win-normal.d39105a87.svg"
              alt="1WIN"
              width="120px"
              bgColor={"#171F34"}
              borderRadius={8}
            />
            <HStack>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Text key={i} fontSize="20px" color="yellow.400">
                    ★
                  </Text>
                ))}
            </HStack>
          </VStack>

          {/* Middle - Promo Offer */}
          <VStack textAlign="center">
            <Text fontSize={["16px", "20px"]} fontWeight="bold">
              100% up to ₹66,000 on your 1st Deposit - Exclusive
            </Text>
            <Text fontSize={["16px", "18px"]} fontWeight="bold">
              Promo Code:{" "}
              <Text as="span" color="orange.500">
                FDBONUS
              </Text>
            </Text>
            <VStack align="flex-start" fontSize={["14px", ""]}>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Best choice for Indian Betting</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Highest odds</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.500" />
                <Text>Fastest withdrawal and permanent promotions</Text>
              </HStack>
            </VStack>
            <HStack>
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/3/vORF2arFblaJpj21q24WSut373QlSVzK60hWrCcJ.png"
                alt="MasterCard"
                width={["30px", "40px"]}
              />
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/4/Ejy3G4LWP68sluQLGZ5TQ9c2bQzGDzT8RtaFCUA9.webp"
                alt="Airtel"
                width={["30px", "40px"]}
              />
              <Image
                src="https://www.thetopbookies.com/storage/payment-methods/5/pd78QJrCn0hGwdUyLdbeHQPMzHeLvBZkjKsmofaC.jpeg"
                alt="UPI"
                width={["30px", "40px"]}
              />
            </HStack>
          </VStack>

          {/* Right Side - Button and Review */}
          <VStack>
            <Link href="https://1wrjmw.com/?p=ibzg">
              <Button
                backgroundColor="yellow.400"
                borderRadius="50px"
                padding={["0px 100px", "15px 30px"]}
                fontSize={["12px", "14px"]}
              >
                PLAY NOW
              </Button>
            </Link>
          </VStack>
        </Box>
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
