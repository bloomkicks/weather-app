import { useState } from "react";
import type { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import moments from "../data/moments";
import days from "../data/days";

import Layout from "../components/layout/Layout";
import Moments from "../components/moments/Moments";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import Week from "../components/week/Week";

const Home: NextPage = () => {
  const [isSearchActive, setIsSearchActive] =
    useState<boolean>(false);

  function searchToggle() {
    console.log(!isSearchActive);
    setIsSearchActive((prev) => !prev);
  }

  return (
    <Layout>
      <Stack
        direction={{ xs: "column", md: "row" }}
        paddingLeft={{xs: '0', md: '460px'}}
        width="100%"
        height="100vh"
      >
        <Hero />
        <Box height="100%">
          <Week days={days} />
          <Moments moments={moments} />
          <Footer />
        </Box>
      </Stack>
    </Layout>
  );
};

export default Home;
