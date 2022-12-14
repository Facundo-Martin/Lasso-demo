import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

import { type Session } from "next-auth";
import { type AppType } from "next/app";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        {/* enable system false is setting the light theme as default */}
        <ThemeProvider enableSystem={false} attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
