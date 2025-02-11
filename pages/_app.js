import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/defaultLayout.component";
import Box from "@mui/material/Box";
import "../styles/globals.css";
import Script from "next/script";
import { Spinner } from "../components/spinner";

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
  const [showChild, setShowChild] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const start = () => setIsLoading(true);
  const complete = () => setIsLoading(false);

  useEffect(() => {
    setShowChild(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", complete);
    Router.events.on("routeChangeError", complete);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", complete);
      Router.events.off("routeChangeError", complete);
      clearTimeout(timer);
    };
  }, []);

  if (!showChild || typeof window === "undefined") return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-249381722-1"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'UA-249381722-1');
        `}
      </Script>

      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
          <Analytics />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
