import Box from "@mui/material/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      {children}
    </Box>
  );
};

export default Layout;
