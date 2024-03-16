import React from "react";
import Link from "next/link";
import pageData from "@/data/index.json";

type Props = {};

// make a json that contains footer data by categories
const footerData = {
  about: [
    {
      title: "FAQ's",
      link: "/",
    },
    {
      title: "Feedback",
      link: "/",
    },
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Terms & Conditions",
      link: "/",
    },
  ],
  resources: [
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
    {
      title: "Help Center",
      link: "/",
    },
  ],
  pages: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Blogs",
      link: "/",
    },
    {
      title: "settings",
      link: "/",
    },
    {
      title: "Newsletters",
      link: "/",
    },
  ],
};

function Footer({}: Props) {
  const { socials } = pageData;
  return (
    <>
      <div className="w-full font-raleway bg-neutral-100 py-20">
        <div className="px-6 lg:px-0 md:container mx-auto lg:w-[950px]">
          <div className="sm:flex flex-row lg:grid sm:grid-cols-2 mb-8">
            <div className="w-full">
              <h3 className=" font-[700] text-4xl">Blogger</h3>
              <p className="text-base lg:text-lg font-[400] mt-3 text-gray-800 lg:pr-8 lg:max-w-md font-raleway ">
                Ready to learn more? Dive into a world of playful, exciting, and
                interesting experience of my personal journey in the world of
                Tech.
              </p>
            </div>

            <div className="hidden w-full sm:w-2/3 md:w-full sm:grid grid-cols-3 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-4">
                  Resource
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.resources.map((item, index) => (
                    <Link href={item.link} shallow={true} key={item.title}>
                      <p className="font-raleway font-normal text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-4">
                  Pages
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.pages.map((item, index) => (
                    <Link href={item.link} shallow={true} key={item.title}>
                      <p className="font-raleway font-normal text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-4">
                  Company
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.about.map((item, index) => (
                    <Link href={item.link} shallow={true} key={item.title}>
                      <p className="font-raleway font-normal text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4 dark:border-neutral-800" />

          <div className="sm:grid grid-cols-1 sm:grid-cols-2 items-center py-2 mt-4">
            <div className="flex items-center font-raleway font-normal sm:text-base text-sm text-neutral-600 dark:text-neutral-400 space-x-4">
              <span className=" ">All rights reserved.</span>
              <span className="font-number ">© 2024 </span>
            </div>
            <div className="flex space-x-2 mt-2 items-center sm:justify-end">
              {socials.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className=" p-1 rounded-md hover:border-black dark:hover:border-white"
                >
                  <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-black hover:text-xl p-2">
                    <i className={`${item.icon} fa-xl fa-fw`}></i>
                    <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 bottom-full -left-1/2 px-4 pointer-events-none">
                      {item.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
