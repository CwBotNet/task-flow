import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import HeroSection from "./components/HeroSection";
import HeroFlow from "./components/flow/HeroFlow";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroFlow />
      <Footer />
    </>
  );
}
