import { Inter } from "next/font/google";
import ContainerBlock from "@/components/ContainerBlock";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContainerBlock
      title="Yassine Sebri - Hacker, Developer and Instructor"
      description="Developer and hacker who loves to learn new things and challenge myself."
    >
      <Hero />
      <AboutMe />
    </ContainerBlock>
  );
}
