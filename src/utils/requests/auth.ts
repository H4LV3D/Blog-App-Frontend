import { appAxios } from "@/config/axios";

interface SignUpDto {
  avatarId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export const getAvatarId = (email: string) => {
  return appAxios.post("/auth/avatar", { email: email });
};

export const signup = (signupDto: SignUpDto) => {
  const { firstName, lastName, userName, email, password, avatarId } =
    signupDto;

  return appAxios.post("/auth/register", {
    avatarId: avatarId,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    password: password,
  });
};

export const login = (identifier: string, password: string) => {
  return appAxios.post("/auth/login", {
    email: identifier,
    password: password,
  });
};

export const logout = () => {
  return appAxios.post("/auth/logout", {});
};

export const refresh = () => {
  return appAxios.post("/auth/refresh", {});
};

export const resendOtp = (email: string) => {
  return appAxios.post("/auth/resend", { email: email });
};

export const verifyEmail = (email: string, otp: number) => {
  return appAxios.post("/auth/verify", { email: email, otp: otp });
};

export const requestPasswordReset = (email: string) => {
  return appAxios.post("/auth/request-reset", { email: email });
};

export const verifyOtp = (email: string, otp: number) => {
  return appAxios.post("/auth/verify", {
    email: email,
    otp: otp,
  });
};

export const resetPassword = (
  email: string,
  code: number,
  password: string
) => {
  return appAxios.post("/auth/reset-password", {
    email: email,
    otp: code,
    newPassword: password,
  });
};
