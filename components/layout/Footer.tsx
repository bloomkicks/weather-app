import MuiLink from "@mui/material/Link";
import Link from "next/link";
import { Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      mx="auto"
      textAlign="center"
      mb={2}
      mt="auto"
    >
      <Typography variant="h6">
        created by{" "}
        <Link passHref href="https://github.com/bloomkicks">
          <MuiLink
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            bloomkicks
          </MuiLink>
        </Link>{" "}
        - devChallenges.io
      </Typography>
    </Box>
  );
};

export default Footer;
