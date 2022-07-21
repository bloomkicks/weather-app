import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import { useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [isSearchActive, setIsSearchActive] =
    useState<boolean>(false);

  function searchToggle() {
    console.log(!isSearchActive);
    setIsSearchActive((prev) => !prev);
  }

  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
