import Head from "next/head";
import CurrentAdvisor from "../components/advisor/CurrentAdvisor";
import RandomAdvisors from "../components/advisor/RandomAdvisors";

export default function Advisor() {
  return (
    <>
      <Head>
        <title>Advisor | Lasso</title>
      </Head>
      <h1 className="mb-4 text-xl ">Your Advisor</h1>
      <CurrentAdvisor />
      <h2 className="mt-16 text-lg mb-4">Explore other advisors</h2>
      <RandomAdvisors />
    </>
  );
}
