import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/shared/Input/Input";
import PrimaryButton from "@/components/shared/buttons/Primary";
import Link from "next/link";
import SignUpFormInput from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Interface";
import { signUpSchema } from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  increaseAuthStep,
  setAuthStepSelectedEmail,
} from "@/store/slices/authStep/AuthStepSlice";
import { useMutation } from "@tanstack/react-query";
import { useAppSelector } from "@/hooks/useAppSelector";
import { signup } from "@/utils/requests/auth";

type Props = {};

function SignUpForm({}: Props) {
  const avatarId = useAppSelector((state) => state.user.avatarId);
  const dispatch = useAppDispatch();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>({
    defaultValues: {
      avatarId: avatarId as number,
    },
    resolver: yupResolver(signUpSchema),
    mode: "all",
  });

  const mutation = useMutation({
    mutationFn: async (data: SignUpFormInput) => {
      const newData = { ...data, avatarId: avatarId as number };
      const res = await signup(newData);
      return res;
    },
    onSuccess: (data) => {
      dispatch(increaseAuthStep());
      console.log(data);
      dispatch(setAuthStepSelectedEmail(getValues("email")));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit: SubmitHandler<SignUpFormInput> = async (
    data: SignUpFormInput
  ) => {
    mutation.mutate(data);
  };

  return (
    <>
      <p className="text-sm sm:text-base md:text-2xl font-normal md:font-medium text-gray-700 dark:text-neutral-400 font-raleway mb-3">
        It's Easy, Sign Up.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full sm:w-[350px]">
          <div className="flex items-center space-x-4">
            <Input
              id="username"
              type="text"
              label="First Name"
              placeholder=""
              name="firstName"
              register={register}
              error={errors.firstName?.message}
            />
            <Input
              id="username"
              type="text"
              label="Last Name"
              placeholder=""
              name="lastName"
              register={register}
              error={errors.firstName?.message}
            />
          </div>

          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder=""
            name="email"
            register={register}
            error={errors.email?.message}
          />

          <div className="flex items-center space-x-4">
            <Input
              id="username"
              type="text"
              label="Username"
              placeholder=""
              name="userName"
              register={register}
              error={errors.userName?.message}
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
          </div>
          <div className="my-2">
            <p className="text-xs text-neutral-400 font-raleway">
              You agree to our{" "}
              <Link href="/terms">
                <span className="text-black dark:text-white">
                  Terms of Service
                </span>
              </Link>{" "}
              and{" "}
              <Link href="/privacy">
                <span className="text-black dark:text-white">
                  Privacy Policy
                </span>
              </Link>
            </p>
          </div>
          <div className="mt-3">
            <PrimaryButton
              loading={mutation.isPending}
              text="Sign Up"
              type="submit"
              action={() => {}}
            />
          </div>
          <div className="mt-2">
            <Link
              href="/login"
              className="text-sm font-raleway text-neutral-400 hover:text-black  cursor-pointer"
            >
              Already have an account? Login.
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
