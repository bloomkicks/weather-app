import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      mx="auto"
      textAlign="center"
      mb={4}
      px={6}
      mt="auto"
    >
      <Typography variant="h6">
        created by{" "}
        <Link passHref href="https://github.com/bloomkicks">
          <MuiLink sx={{ fontWeight: "bold", color: "text.primary" }}>
            bloomkicks
          </MuiLink>
        </Link>{" "}
        - devChallenges.io
      </Typography>
    </Box>
  );
};

export default Footer;
