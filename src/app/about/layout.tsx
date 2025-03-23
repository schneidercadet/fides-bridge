import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Fides Bridge",
  description: "Learn about Fides Bridge - connecting talent with opportunity for career success.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 