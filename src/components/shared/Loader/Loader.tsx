import Head from "next/head";
import React from "react";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const Loader: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blogger</title>
        <meta name="description" content="connect meet and share opinions " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-screen w-screen bg-white  grid place-items-center">
        <div>
          <div className="mb-4">
            <h3 className=" font-[700] text-black text-3xl sm:text-4xl">
              Blogger
            </h3>
          </div>
          <ButtonLoader color="#000" />
        </div>
      </div>
    </>
  );
};

export default Loader;
