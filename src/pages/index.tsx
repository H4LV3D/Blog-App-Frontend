"use client";
import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import pageData from "@/data/index.json";
// import Genres from "../app/home/Genres";
// import Collaborative from "../app/home/Collaborative";
// import Review from "../app/home/Reviews";
// import Subscribe from "../app/home/Subscribe";
import Footer from "@/components/shared/DisplayCard/footer/Footer";
import Banner from "@/components/shared/Banner/Banner";
import Head from "next/head";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

export default function Home({}: {}) {
  const { blogs, reviews } = pageData;

  return (
    <>
      <Head>
        <title>Trending | Home</title>
        <meta name="description" content="Blogger Tales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="bg-white dark:bg-black/90 min-h-screen w-full cursor-black">
        <Navbar />
        <MaxWidthProvider>
          <Banner
            heading={{
              line1: "Information",
              line2: "at your Finger Tips.",
            }}
            text="Ready to learn more? Dive into a world of playful, exciting, and interesting experience of my personal journey in the world of Tech."
            data={blogs}
          />

          {/* <Generations /> */}
        </MaxWidthProvider>

        {/* <Genres /> */}

        {/* <Collaborative /> */}

        <div className="md:container mx-auto !px-6 lg:px-0 font-raleway ">
          {/* <Review reviews={reviews} /> */}

          {/* <Subscribe setNotify={setNotify} setMessage={setMessage} /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
