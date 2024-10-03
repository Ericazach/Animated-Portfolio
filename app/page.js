import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#DD798F] to-[#29727C] w-screen h-screen">
      <div className="h-24">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-6rem)]">
        <Hero />
        <About />
      </div>
    </div>
  );
}
