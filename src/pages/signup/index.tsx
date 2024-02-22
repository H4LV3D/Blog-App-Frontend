import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import SignUpForm from "@/components/forms/MultiStepSignUpForm/SignUpForm";
import SecondaryButton from "@/components/shared/buttons/Secondary";
import { useAppSelector } from "@/hooks/useAppSelector";

type Props = {};

const Page = (props: Props) => {
  const authstep = useAppSelector((state) => state.authStep.step);
  return (
    <>
      <AuthLayout form={authstep === 0 ? "signup" : "login"}>
        <SignUpForm />
        <div className="mt-8">
          <p className="text-sm mb-2 text-neutral-500">Sign up with</p>
          <div className="flex flex-col space-y-2">
            <SecondaryButton link="https://google.com" text="Google" />
            <SecondaryButton link="https://apple.com" text="Apple" />
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Page;
