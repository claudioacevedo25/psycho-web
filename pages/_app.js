import { createTheme, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import DefaultLayout from "../components/defaultLayout.component";
import "../styles/globals.css";

const font = "'Josefin Sans', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      dark: "#bfbbcb",
      main: "#e4fbfb", // color del navbar
      light: "#bfbbcb",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
        <Analytics />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
