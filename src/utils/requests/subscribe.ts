import { appAxios } from "@/config/axios";

export const subscribe = async (email: string) => {
  const { data } = await appAxios.post("/subscribe", { email });
  return data;
};
