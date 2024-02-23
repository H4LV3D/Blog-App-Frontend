import React from "react";
import type { newBlog } from "@/typings/blog";

type Props = {
  selectedBlog: newBlog;
};

const Info = ({ selectedBlog }: Props) => {
  return (
    <>
      <div className="mt-4">
        <hr className="mt-4 mb-4 dark:border-neutral-800" />
        <div className="flex justify-between pb-2">
          <div className="flex items-center space-x-4 pb-2">
            <p className="font-sans font-normal text-sm text-neutral-600 flex items-center space-x-3"></p>
          </div>
          <p className="font-raleway font-normal text-sm"></p>
          <p className="font-raleway font-normal text-sm">
            <span className="font-[500]">Author:</span> {selectedBlog?._id}
          </p>
        </div>
        <hr className="mb-3 dark:border-neutral-800" />
      </div>
    </>
  );
};

export default Info;
