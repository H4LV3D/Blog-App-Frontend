"use client";
import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";

type Props = {
  children: React.ReactNode;
};

const DashboardPageLayout = ({ children }: Props) => {
  return (
    <ProtectedPageLayout>
      <ModalProvider>
        <div className="bg-white dark:bg-black/90 min-h-screen w-full">
          <Navbar nav={true} />
          <div className="mt-[70px] mb-12">
            <div className="fixed w-full bg-white z-30">
              <Header />
            </div>
            {children}
          </div>
          <Footer />
        </div>
      </ModalProvider>
    </ProtectedPageLayout>
  );
};

export default DashboardPageLayout;
