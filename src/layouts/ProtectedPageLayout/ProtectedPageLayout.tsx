"use client";
import React from "react";
import Loader from "@/components/shared/Loader/Loader";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";
import { useUser } from "../../hooks/useUser";

interface Props {
  children: React.ReactNode;
}

const ProtectedPageLayout: React.FC<Props> = ({ children }) => {
  const { isLoading, isNull } = useUser("/login");

  if (isLoading || isNull) {
    return <Loader />;
  }
  return (
    <div>
      <ModalProvider>{children}</ModalProvider>
    </div>
  );
};

export default ProtectedPageLayout;
