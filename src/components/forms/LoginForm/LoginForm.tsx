"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/shared/Input/Input";
import PrimaryButton from "@/components/shared/buttons/Primary";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SignUpFormInput from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Interface";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { loginUser, updateAvatarId } from "@/store/slices/user/UserSlice";
import { useMutation } from "@tanstack/react-query";
import { getAvatarId, login } from "@/utils/requests/auth";
import SuccessNotification from "@/components/Notifications/successNotification";
import ErrorNotification from "@/components/Notifications/ErrorNotification";
import { useRouter } from "next/navigation";

import { notifications, showNotification } from "@mantine/notifications";
import {
  increaseAuthStep,
  selectAuthStep,
  setAuthStepSelectedEmail,
} from "@/store/slices/authStep/AuthStepSlice";

type Props = {
  setNotify: (notify: boolean) => void;
  setMessage: (message: string) => void;
};

interface LoginForm {
  email: string;
  password: string;
}

function LoginForm({}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<SignUpFormInput>();

  const email = watch("email");

  const avatarMutation = useMutation({
    mutationFn: async (email: string) => {
      const res = await getAvatarId(email);
      return res;
    },
    onSuccess: (data) => {
      dispatch(updateAvatarId(data.data.avatarId));
    },
    onError: (error) => {
      dispatch(updateAvatarId(null));
    },
  });

  useEffect(() => {
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isEmail.test(email)) {
      avatarMutation.mutate(email);
    } else {
      dispatch(updateAvatarId(null));
    }
  }, [email, dispatch]);

  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const res = await login(data.email, data.password);
      return res;
    },
    onSuccess: (data) => {
      console.log(data.data);
      dispatch(loginUser(data.data));
      if (!data.data.emailVerified) {
        dispatch(
          selectAuthStep({
            direction: "next",
            step: 1,
            selectedEmail: data.data.user.email,
          })
        );
        router.push("/signup");
      } else {
        router.push("/dashboard");
      }
      showNotification(data.data.message);
    },
    onError: (error) => {
      // @ts-ignore
      showNotification(error.response.data.message);
      ErrorNotification({
        title: "Login Failed",
        // @ts-ignore
        message: error.response.data.message,
      });
    },
  });

  const onSubmit = async (data: LoginForm) => {
    mutation.mutate(data);
  };

  return (
    <>
      <p className="text-sm sm:text-base md:text-2xl font-normal md:font-medium text-gray-800 dark:text-neutral-400 font-raleway mb-3">
        Welcome back, Login.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full sm:w-[350px]">
          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder=""
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder=""
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Link
            href="/reset-password"
            className="text-sm font-raleway text-neutral-500 hover:text-black"
          >
            Forgot your password?
          </Link>
          <div className="mt-4">
            <PrimaryButton
              loading={mutation.isPending}
              text="Login"
              action={() => {}}
              type="submit"
            />
          </div>
          <div className="mt-3">
            <Link
              href="/signup"
              className="text-sm font-raleway text-neutral-500 hover:text-black cursor-pointer"
            >
              Don&apos;t have an account? Sign Up.
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
