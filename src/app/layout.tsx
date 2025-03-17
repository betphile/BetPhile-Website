import { Poppins, Open_Sans, Roboto, Rubik, Tektur } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetPhile",
  description:
    "BetPhile has been in your selfless service since 2018. Join our community for a profitable betting journey.x",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-poppins", // Define a CSS variable for the font
});

const tektur = Tektur({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-tektur", // Define a CSS variable for the font
});

const opensans = Open_Sans({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-Open_Sans", // Define a CSS variable for the font
});

const roboto = Roboto({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-Roboto", // Define a CSS variable for the font
});
const rubik = Rubik({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-Rubik", // Define a CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${opensans.variable} ${roboto.variable} ${rubik.variable}  ${tektur.variable} ant antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
