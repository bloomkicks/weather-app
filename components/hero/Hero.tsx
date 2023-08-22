import { DateTime } from "luxon";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";

import SearchDrawer from "../search/SearchDrawer";
import CityActions from "./CityActions";
import Images from "./Images";

const date = DateTime.now();
const stringDate = date.toFormat("ccc, d LLL");

const Hero = () => {
  const { forecast, location } = useSelector(
    (state: RootState) => state.weather
  );
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  function openSearchHandler() {
    setIsSearchOpen(true);
  }

  return (
    <Stack
      component="article"
      alignItems="center"
      position={{ xs: "static", md: "fixed" }}
      left="0"
      top="0"
      width={{ xs: "100%", md: "460px" }}
      height={{ xs: "auto", md: "100%" }}
      pt={2}
      pb={6}
      bgcolor="background.paper"
    >
      <SearchDrawer
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <CityActions onOpenSearch={openSearchHandler} />
      <Images weatherType={forecast[0].weatherType} />
      <Typography variant="h1">
        {forecast[0].temperature}
        <Typography
          variant="h2"
          component="span"
          color="text.secondary"
        >
          ℃
        </Typography>
      </Typography>
      <Typography color="text.secondary" variant="h2" mt={2}>
        {forecast[0].weatherType[0].toUpperCase() +
          forecast[0].weatherType.slice(1)}
      </Typography>
      <Typography color="text.secondary" mt={7}>
        Today
        <Box component="span" display="inline-block" mx={1}>
          •
        </Box>
        {stringDate}
      </Typography>
      <Typography variant="h3" color="text.secondary" mt={4}>
        <LocationOn sx={{ verticalAlign: "bottom", mr: "4px" }} />
        <span style={{ verticalAlign: "baseline" }}>{location}</span>
      </Typography>
    </Stack>
  );
};

export default Hero;
