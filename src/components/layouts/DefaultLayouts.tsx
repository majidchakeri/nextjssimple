"use client";

import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
const component = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-raw w-screen">
      <div className="flex flex-raw ">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <main className="p-4 h-screen">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default component;
