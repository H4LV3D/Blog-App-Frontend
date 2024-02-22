"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  increasePasswordRecoveryStep,
  setPasswordRecoveryStepSelectedEmail,
} from "@/store/slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import { requestPasswordReset } from "@/utils/requests/auth";
import PrimaryButton from "@/components/shared/buttons/Primary";
import SecondaryButton from "@/components/shared/buttons/Secondary";
import { useMutation } from "@tanstack/react-query";
import { getAvatarId } from "@/utils/requests/auth";
import { updateAvatarId } from "@/store/slices/user/UserSlice";
import { toast, Bounce } from "react-toastify";
import ShowNotification from "@/components/Notifications/ShowNotification";

interface Props {}

interface FormInput {
  email: string;
}

const Step1: React.FC = () => {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const dispatch = useAppDispatch();
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
      dispatch(setPasswordRecoveryStepSelectedEmail(email));
    } else {
      dispatch(updateAvatarId(null));
    }
  }, [email, dispatch]);

  const handleNext = async () => {
    const isValid = await trigger(["email"]);
    if (!isValid) return;
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await requestPasswordReset(email);
      return res;
    },
    onSuccess: (data) => {
      ShowNotification(data.data.message);
      dispatch(increasePasswordRecoveryStep());
    },
    onError: (error) => {
      console.log(error);
      // @ts-ignore
      ShowNotification(error.response.data.message);
    },
  });

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-2 font-semibold text-[1.5rem]">Forgot Password</h1>
        <p className="max-w-xs text-sm font-[400] text-neutral-600 ">
          Enter your registered email to receive further instructions
        </p>
      </div>
      <div className="form-container w-full sm:w-[350px] font-number text-black dark:text-white mb-8">
        <div className="mb-3 w-full">
          <label
            htmlFor="email"
            className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="on"
            placeholder=""
            required
            {...register("email")}
            className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border hover:border-neutral-500 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
          />
          {errors.email && (
            <p className="text-xs font-semibold">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-4">
        <PrimaryButton
          loading={mutation.isPending}
          text="Send"
          type="button"
          action={handleNext}
        />

        <SecondaryButton text="Login" link="/login" />
      </div>
    </>
  );
};

export default Step1;
