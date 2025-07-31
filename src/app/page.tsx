import FeaturedSec from "@/components/FeaturedSec";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingCards from "@/components/MovingCards"
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <Hero />
        <FeaturedSec />
        <WhyChooseUs />
        <MovingCards />
        <UpComingWebinars />
        <Instructors />
      </main>
    </>
  );
}