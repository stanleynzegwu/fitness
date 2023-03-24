import Image from "next/image";
import { About, Feature, Hero, Pricing, Team, Testimonial } from "./container";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <About />
      <Team />
      <Pricing />
      <Testimonial />
    </main>
  );
}
