import { useState } from "react";
import type { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Layout from "../components/layout/Layout";
import HighlightList from "../components/highlights/HighlightList";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import Forecast from "../components/forecast/Forecast";

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
        paddingLeft={{ xs: "0", md: "460px" }}
        width="100%"
        height="100vh"
      >
        <Hero />
        <Box
          height="100%"
          maxWidth={1000}
          mx="auto"
          sx={{ mt: { md: 4 } }}
        >
          <Forecast />
          <HighlightList />
          <Footer />
        </Box>
      </Stack>
    </Layout>
  );
};

export default Home;
