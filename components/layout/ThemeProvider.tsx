import {
  createTheme,
  CssBaseline,
  ThemeProvider as Provider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#E7E7EB",
      secondary: "#A09FB1",
    },
    background: {
      default: "#100E1D",
      paper: '#1E213A'
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Raleway, Roboto, Arial, sans-serif",
    },
    h1: {
      fontWeight: "bold",
      fontSize: 144,
    },
    h2: {
      fontWeight: "bold",
      fontSize: 36,
    },
    h3: {
      fontWeight: "bold",
      fontSize: 18,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16
    },
    caption: {
      fontFamily: "Montserrat, Roboto, Arial, sans-serif",
    }
  },
});

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
