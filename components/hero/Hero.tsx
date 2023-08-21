import { DateTime } from "luxon";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import MyLocation from "@mui/icons-material/MyLocation";
import LocationOn from "@mui/icons-material/LocationOn";

import SearchDrawer from "../search/SearchDrawer";
import Images from "./Images";

const date = DateTime.now();
const stringDate = date.toFormat("ccc, d LLL");

const Hero = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.currentWeather
  );
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

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
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2 }}
      >
        <Button
          variant="contained"
          onClick={() => setIsSearchOpen(true)}
        >
          Search for places
        </Button>
        <IconButton
          sx={{
            color: "text.primary",
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "primary.dark",
            },
          }}
          size="small"
        >
          <MyLocation fontSize="large" />
        </IconButton>
      </Stack>
      <Images />
      <Typography variant="h1">
        {currentWeather.avgTemperature}
        <Typography
          variant="h2"
          component="span"
          color="text.secondary"
        >
          ℃
        </Typography>
      </Typography>
      <Typography color="text.secondary" variant="h2" mt={2}>
        {currentWeather.weatherType[0].toUpperCase() +
          currentWeather.weatherType.slice(1)}
      </Typography>
      <Typography color="text.secondary" mt={7}>
        Today
        <Box component="span" display="inline-block" mx={1}>
          •
        </Box>
        {stringDate}
      </Typography>
      <Typography variant="h3" color="text.secondary" mt={4}>
        <LocationOn sx={{ verticalAlign: "bottom", mr: "2px" }} />
        Saint-Petersburg
      </Typography>
    </Stack>
  );
};

export default Hero;
