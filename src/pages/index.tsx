import type { AppDispatch } from "../store";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateWeatherThunk } from "../store/weatherSlice";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Layout from "../components/layout/Layout";
import HighlightList from "../components/highlights/HighlightList";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import Forecast from "../components/forecast/Forecast";

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(updateWeatherThunk("auto:ip"));
  }, [dispatch]);

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
          maxWidth={{ xs: 520, lg: 900 }}
          mx="auto"
          sx={{ pt: { md: 4 }, pb: 4 }}
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
