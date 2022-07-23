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

const Hero = () => {
  const [isSearchOpen, setIsSearchOpen] =
    useState<boolean>(false);

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
      <SearchDrawer open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
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
        15
        <Typography
          variant="h2"
          component="span"
          color="text.secondary"
        >
          ℃
        </Typography>
      </Typography>
      <Typography
        color="text.secondary"
        variant="h2"
        mb={4}
        mt={2}
      >
        Shower
      </Typography>
      <Typography color="text.secondary">
        Today
        <Box component="span" display="inline-block" mx={2}>
          •
        </Box>
        Fri, 5 Jun
      </Typography>
      <Typography variant="h3" color="text.secondary" mt={3}>
        <LocationOn
          sx={{ verticalAlign: "bottom", mr: "2px" }}
        />
        Helsinki
      </Typography>
    </Stack>
  );
};

export default Hero;
