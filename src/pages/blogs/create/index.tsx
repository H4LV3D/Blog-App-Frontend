import CreateBlogPageWrapper from "@/components/page-wrappers/CreateBlogPageWrapper/CreateBlogPageWrapper";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import React from "react";
import PageLayout from "@/layouts/PageLayout/PageLayout";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <ProtectedPageLayout>
        <PageLayout>
          <CreateBlogPageWrapper />
        </PageLayout>
      </ProtectedPageLayout>
    </>
  );
};

export default index;
