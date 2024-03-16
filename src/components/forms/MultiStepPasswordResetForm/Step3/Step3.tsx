import React, { useState } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { MultiStepPasswordResetFormInputs } from "../MultiStepPasswordResetForm.interface";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import SecondaryButton from "@/components/shared/buttons/Secondary";
import PrimaryButton from "@/components/shared/buttons/Primary";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { resetPassword } from "@/utils/requests/auth";
import { useMutation } from "@tanstack/react-query";
import { useAppSelector } from "@/hooks/useAppSelector";
import ShowNotification from "@/components/Notifications/ShowNotification";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";

interface Props {}

interface FormInputs {
  password: string;
  confirmPassword: string;
}

const Step3: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const email = useAppSelector(
    (state) => state.passwordRecoveryStep.selectedEmail
  );
  const avatarId = useAppSelector((state) => state.user.avatarId);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormInputs>();

  const { password, confirmPassword } = watch();

  const onSubmit = async () => {
    if (password.trim() === "" || confirmPassword.trim() === "") {
      showNotification({ message: "Please fill in all fields" });
    }
    if (password !== confirmPassword) {
      const message = { message: "Passwords do not match" };
      showNotification(message);
      return;
    }
    passwordResetMutation.mutate();
  };

  const passwordResetMutation = useMutation({
    mutationFn: async () => {
      const res = await resetPassword(email, password, avatarId as number);
      return res;
    },
    onSuccess: (data) => {
      ShowNotification(data.data.message);
      router.push("/login");
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
        <h1 className="font-semibold text-[1.5rem]">Reset Password</h1>
        <p className="text-sm">Choose a new password for your account</p>
      </div>
      <div className="grid gap-[1.25rem] w-full sm:min-w-[350px] ">
        <div className="form-container font-number text-black dark:text-white">
          <div className="w-full">
            <label
              htmlFor="password"
              className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
            >
              Password
            </label>
            <input
              id="password"
              type={"password"}
              autoComplete="on"
              placeholder=""
              required
              {...register("password")}
              className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border hover:border-neutral-500 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
            />
            {errors.password && (
              <p className="text-xs font-semibold">{errors.password.message}</p>
            )}
          </div>
        </div>
        <div className="form-container font-number text-black dark:text-white mb-3">
          <div className="mb-3 w-full">
            <label
              htmlFor="confirmpassword"
              className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
            >
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              type={"password"}
              autoComplete="on"
              placeholder=""
              required
              {...register("confirmPassword")}
              className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border hover:border-neutral-500 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
            />
            {errors.confirmPassword && (
              <p className="text-xs font-semibold">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="grid place-items-center gap-y-3 mb-[1.25rem]">
          <PrimaryButton
            loading={passwordResetMutation.isPending}
            text="Submit"
            type="button"
            action={onSubmit}
          />
          <Link href="/login" className="w-full ">
            <button
              type="button"
              className="h-[3.5rem] w-full bg-transparent border border-neutral-500 text-lg text-neutral-500 hover:text-[#0e0e0e] hover:border-[#0e0e0e] font-[500] rounded-[0.5rem] "
            >
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step3;
