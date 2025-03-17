import React from "react";
import { GetNavbar } from "../NavbarContainer/Navbar";
import { GetFooter } from "../Footer/Footer";
import { Box } from "@chakra-ui/react";

interface MainWrapperProps {
  children?: React.ReactNode; 
}

export const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return (
    <Box height="120vh" width="100%">
      <GetNavbar />
      {children}
      <GetFooter/>
    </Box>
  );
};
