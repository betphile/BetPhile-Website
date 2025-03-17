'use client'

import { Poppins, Open_Sans, Roboto, Rubik ,Tektur} from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  useEffect(() => {
    router.push("/user/home");
  }, [router]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Bet Phile</title>
      </head>
      <body
        className={` ${poppins.variable} ${opensans.variable} ${roboto.variable} ${rubik.variable}  ${tektur.variable} ant antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
