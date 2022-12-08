import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
