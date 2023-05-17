import { About, Feature, Hero, Pricing, SearchExercises, Team, Testimonial } from "./container";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <SearchExercises />
      <Feature />
      <About />
      <Team />
      <Pricing />
      <Testimonial />
    </main>
  );
}
