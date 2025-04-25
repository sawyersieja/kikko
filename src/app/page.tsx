import { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Home | Sawyer",
  description: "Welcome to Sawyer's portfolio website — showcasing creative projects, development skills, and a passion for building digital experiences.",
}

export default function Home() {
  return (
      <Hero />
  );
}
