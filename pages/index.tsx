import { useState } from "react";
import type { NextPage } from "next";
import classes from './index.module.scss'

import Hero from "../components/sections/hero/Hero";
import Week from "../components/sections/week/Week";
import Search from "../components/sections/search/Search";
import Highlights from "../components/sections/highlights/Highlights";
import Footer from "../components/sections/footer/Footer";

const Home: NextPage = () => {
  const [isSearchActive, setIsSearchActive] =
    useState<boolean>(false);

  function searchToggle() {
    console.log(!isSearchActive);
    setIsSearchActive((prev) => !prev);
  }

  return (
    <>
      <main className={classes.hero}>
        <Hero onSearch={searchToggle} />
        <Search
          onClose={searchToggle}
          isActive={isSearchActive}
        />
      </main>
      <div className={classes.details}>
        <Week />
        <Highlights />
        <Footer />
      </div>
    </>
  );
};

export default Home;
