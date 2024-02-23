import { appAxios } from "@/config/axios";

export const subscribe = async (email: string) => {
  try {
    const { data } = await appAxios.post("/subscribe", { email });
    return data;
  } catch (error) {
    return error;
  }
};
