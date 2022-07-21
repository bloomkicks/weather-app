import Box from "@mui/material/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Box component="main">{children}</Box>;
};

export default Layout;
