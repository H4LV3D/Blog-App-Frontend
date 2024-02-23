import { appAxios } from "@/config/axios";

interface createBlogData {
  title: string;
  content: string;
  image: string;
}

export const createBlog = async (data: createBlogData) => {
  const res = await appAxios.post("/blogs", data);
  return res.data;
};

export const getBlogs = async () => {
  const res = await appAxios.get("/blogs");
  return res.data;
};

export const getBlog = async (id: string) => {
  const res = await appAxios.get(`/blogs/${id}`);
  return res.data;
};

export const updateBlog = async (id: string, data: createBlogData) => {
  const res = await appAxios.patch(`/blogs/${id}`, data);
  return res.data;
};

export const deleteBlog = async (id: string) => {
  const res = await appAxios.delete(`/blogs/${id}`);
  return res.data;
};
