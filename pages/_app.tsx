import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <SessionProvider session={pageProps.session}>
//         <ThemeProvider enableSystem={true} attribute="class">
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </ThemeProvider>
//       </SessionProvider>
//     </>
//   );
// }
