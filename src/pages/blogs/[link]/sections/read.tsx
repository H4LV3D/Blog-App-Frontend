import React from "react";
import type { newBlog } from "@/typings/blog";
import ReactHtmlParser from "react-html-parser";

type Props = {
  selectedBlog: newBlog;
};

const Read = ({ selectedBlog }: Props) => {
  return (
    <>
      {selectedBlog?.content ? (
        selectedBlog.content && (
          <p className=" mt-6 text-justify !leading-[2rem] ">
            {ReactHtmlParser(selectedBlog.content)}
          </p>
        )
      ) : (
        <p className="font-raleway text-sm md:text-base mt-6 text-justify">
          Fasten your seatbelt, As this episode is going to be yet another
          inspiring and vital piece of information. Stay Tuned!
        </p>
      )}
    </>
  );
};

export default Read;
