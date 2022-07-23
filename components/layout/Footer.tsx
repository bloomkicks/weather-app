import { Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box mt="auto">
      <Typography variant="h6">
        created by{" "}
        <b>
          <u>bloomkicks</u>
        </b>{" "}
        - devChallenges.io
      </Typography>
    </Box>
  );
};

export default Footer;
