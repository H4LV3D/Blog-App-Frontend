import pageData from "@/data/index.json";
import React from "react";

type Props = {};

type TitleAndTeaser = {
  title: string;
  teaser: string;
};

type GenreItem = {
  name: string;
  illustrativeImage: string;
  titlesAndTeasers: TitleAndTeaser[];
};

function Genres({}: Props) {
  const { genres } = pageData;

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="mb-4">
          <div className="flex flex-col justify-center items-center lg:w-[900px]">
            <h1 className="text-5xl sm:text-6xl text-black dark:text-neutral-200 font-oleo font-normal text-center">
              Genres and Themes.
            </h1>
          </div>

          <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
            <p className="text-sm md:text-lg text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3 mb-8">
              Ready to learn more? Dive into a world of playful, exciting, and
              interesting experience of my personal journey in the world of
              Tech.
            </p>
          </div>
        </div>
        <div className="pt-8 w-full overflow-hidden">
          <div className="relative w-full mx-auto md:w-[900px] lg:w-[1100px] h-[210vh]">
            {/* blog marque */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Genres;
