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
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Fides Bridge",
    description: "The best jobsite for your future",
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'Fides Bridge Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fides Bridge",
    description: "The best jobsite for your future",
    images: ['/images/preview.png'],
  },
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
