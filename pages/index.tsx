import About from "../components/About";
import Brands from "../components/Brands";
import Features from "../components/Features";
import Future from "../components/Future";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Future />
      <Features />
    </>
  );
}
