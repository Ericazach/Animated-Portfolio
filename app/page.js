import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Social from "@/components/Social";

export default function Home() {
  return (
    <main className="dark:bg-gradient-to-b dark:from-[#1d3651] dark:to-[#531422] bg-gradient-to-b from-[#DD798F] to-[#29727C] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="w-full">
        <Social />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
