import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
}
