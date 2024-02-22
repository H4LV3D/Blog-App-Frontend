import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Blogs = (props: Props) => {
  const router = useRouter();
  const id = router.query.id;
  return <div>Blogs</div>;
};

export default Blogs;
