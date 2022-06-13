import Hero from "../components/sections/hero/Hero";
import Week from "../components/sections/week/Week";
import Highlights from "../components/sections/highlights/Highlights";
import Footer from "../components/sections/footer/Footer";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Week />
      <Highlights />
      <Footer />
    </>
  );
};

export default Home;
