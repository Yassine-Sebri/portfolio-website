import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
