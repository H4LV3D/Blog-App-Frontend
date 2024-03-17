import React from "react";
import Head from "next/head";
import HomePageWrapper from "@/components/page-wrappers/HomePageWrapper/HomePageWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogger | Home</title>
        <meta name="description" content="Blogger " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HomePageWrapper />
    </>
  );
}
