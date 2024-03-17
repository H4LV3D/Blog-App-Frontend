"use client";
import React from "react";
import SubscribeForm from "@/components/forms/SubscribeForm/SubscribeForm";

type Props = {};

function Subscribe({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center border-t py-20 min-h-[60vh] w-full">
        <div className="text-center w-full grid place-items-center ">
          <p className="text-xl dark:text-neutral-400 text-black max-w-md text-center  ">
            Newsletter
          </p>
          <h4 className="text-4xl md:text-5xl font-[700] dark:text-neutral-400 text-black mb-4">
            Subscribe Today!
          </h4>
          <p className="text-sm sm:text-base text-gray-700 font-raleway mb-3 md:max-w-md">
            Stay updated with the latest Blogger tales, blogs and newsletters by
            subscribing to our mailing list.
          </p>

          <div className="w-full mt-6">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
