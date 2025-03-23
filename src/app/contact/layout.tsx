import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fides Bridge",
  description: "Get in touch with our team - we're here to assist with your hiring and career needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 