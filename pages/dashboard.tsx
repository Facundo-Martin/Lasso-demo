import Head from "next/head";
import Blog from "../components/dashboard/Blog";
import UserHeader from "../components/dashboard/UserHeader";
import useAuth from "../components/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Dashboard | Lasso</title>
      </Head>
      <UserHeader />
      <Blog />
    </>
  );
}
