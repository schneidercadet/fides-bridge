import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Fides Bridge",
  description: "Access valuable career resources, skill assessments, and job search tools from Fides Bridge.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 