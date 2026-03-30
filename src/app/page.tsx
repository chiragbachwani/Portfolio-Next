import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GithubActivity from "@/components/GithubActivity";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";

export default function Home() {
  return (
    <main className="w-full flex-col flex items-center justify-center relative bg-transparent z-10">
      <AbstractBackground />
      <Hero />
      <About />
      <Projects />
      <GithubActivity />
      <Experience />
      <Achievements />
      <Footer />
    </main>
  );
}
