import { useState } from "react";
import type { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Layout from "../components/layout/Layout";
import Moments from "../components/moments/Moments";
import Hero from "../components/hero/Hero";
import Week from "../components/week/Week";
import moments from "../data/moments";
import days from "../data/days";

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
        width="100%"
      >
        <Hero />
        <Box>
          <Week days={days} />
          <Moments moments={moments} />
        </Box>
      </Stack>
    </Layout>
  );
};

export default Home;
