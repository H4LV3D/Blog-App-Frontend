"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-white dark:bg-black/90 min-h-screen w-full cursor-black">
        <Navbar nav={true} />
        <main className="mt-[70px] mb-12">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
