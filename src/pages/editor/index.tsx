"use client";
import React from "react";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import EditorPageWrapper from "@/components/page-wrappers/EditorPageWrapper/EditorPageWrapper";
import Head from "next/head";
import CreateBlogPageWrapper from "@/components/page-wrappers/CreateBlogPageWrapper/CreateBlogPageWrapper";

type Props = {};

const Editor = ({}: Props) => {
  return (
    <>
      <>
        <Head>
          <title>Gen-Z | Editor</title>
          <meta name="description" content="Gen-Z Blog Editor" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <DashboardPageLayout>
          {/* <EditorPageWrapper /> */}
          <CreateBlogPageWrapper />
        </DashboardPageLayout>
      </>
    </>
  );
};

export default Editor;
