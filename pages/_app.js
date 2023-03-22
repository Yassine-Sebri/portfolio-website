import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import LoadingIcon from "../components/LoadingIcon";
import "../styles/loadingIcon.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
      {loading && <LoadingIcon />}
    </ThemeProvider>
  );
}
