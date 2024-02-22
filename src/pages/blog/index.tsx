import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import React from "react";
import BlogEditor from "./BlogEditor";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";

type Props = {};

const index = (props: Props) => {
  return (
    <ProtectedPageLayout>
      <DashboardPageLayout>
        <div>
          <h1>Blog</h1>
        </div>
        <BlogEditor />
      </DashboardPageLayout>
    </ProtectedPageLayout>
  );
};

export default index;
