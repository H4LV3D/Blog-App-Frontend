import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import React from "react";
import BlogEditor from "./BlogEditor";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const index = (props: Props) => {
  return (
    <ProtectedPageLayout>
      <DashboardPageLayout>
        <MaxWidthProvider>
          <div>
            <h1 className="text-3xl ">Blog</h1>
            <BlogEditor />
          </div>
        </MaxWidthProvider>
      </DashboardPageLayout>
    </ProtectedPageLayout>
  );
};

export default index;
