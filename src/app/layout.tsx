import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ChatAssistantWrapper from "@/Components/ChatAssistantWrapper";
import BackgroundPattern from "@/Components/BackgroundPattern";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Fides Bridge",
  description: "The best jobsite for your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-plus-jakarta bg-[#0B0F19]`}
      >
        <BackgroundPattern>
          {children}
        </BackgroundPattern>
        
        {/* Chat Assistant */}
        <ChatAssistantWrapper />
      </body>
    </html>
  );
}
