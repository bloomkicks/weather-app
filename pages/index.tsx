import Stack from "@mui/material/Stack";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import Week from "../components/week/Week";
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
      <Stack direction={{ xs: "column", md: "row" }} width="100%">
        <Hero />
        <Week />
      </Stack>
    </Layout>
  );
};

export default Home;
