"use client";
import React from "react";
import SubscribeForm from "@/components/forms/SubscribeForm/SubscribeForm";

type Props = {};

function Subscribe({}: Props) {
  return (
    <>
      <div className=" py-20 w-full">
        <h4 className="text-4xl md:text-6xl font-[700] dark:text-neutral-400 text-black mb-2">
          Subscribe
        </h4>
        <p className="text-sm sm:text-base text-gray-700  mb-3 md:max-w-lg">
          Stay updated with the latest Blogger tales, blogs and newsletters by
          subscribing to our mailing list.
        </p>

        <div className="sm:w-full sm:max-w-lg">
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}

export default Subscribe;
