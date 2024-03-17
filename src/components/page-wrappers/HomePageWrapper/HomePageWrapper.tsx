"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import pageData from "@/data/index.json";
import Generations from "@/components/home/Generations";
import Collaborative from "@/components/home/Collaborative";
import Review from "@/components/home/Reviews";
import Subscribe from "@/components/home/Subscribe";
import Footer from "@/components/shared/footer/Footer";
import Banner from "@/components/shared/Banner/Banner";
import Head from "next/head";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

export default function HomePageWrapper({}: {}) {
  const { blogs, reviews } = pageData;

  return (
    <>
      <Head>
        <title>Blogger | Home</title>
        <meta name="description" content="Blogger " />
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
            text="This is where your experiences come to life through the power of words. Explore, share, and connect with others on a platform designed for your unique voice. Write about your experience or read others!"
            data={blogs}
          />

          <Generations />
        </MaxWidthProvider>

        <Collaborative />

        <div className="md:container mx-auto !px-6 lg:px-0 font-raleway ">
          <Review reviews={reviews} />
          <Subscribe />
        </div>
        <Footer />
      </div>
    </>
  );
}
