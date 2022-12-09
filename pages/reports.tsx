import Head from "next/head";
import Stats from "../components/analytics/Stats";

export default function Reports() {
  return (
    <>
      <Head>
        <title>Reports | Lasso</title>
      </Head>
      <h1>Reports</h1>
      <Stats />
    </>
  );
}
