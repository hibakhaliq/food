import Hero from"@/components/Hero"
import Image from "next/image";
import Featured from "@/components/Featured";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survey />
       </main>
  )};