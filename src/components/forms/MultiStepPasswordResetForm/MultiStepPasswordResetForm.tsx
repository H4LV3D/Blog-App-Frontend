"use client";
import React, { useEffect, useState } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AnimatePresence } from "framer-motion";
import { resetPasswordRecoveryStep } from "@/store/slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { MultiStepPasswordResetFormSchema } from "./MultiStepPasswordResetForm.schema";
import { MultiStepPasswordResetFormInputs } from "./MultiStepPasswordResetForm.interface";
import { yupResolver } from "@hookform/resolvers/yup";

const MultiStepPasswordRecoveryForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.passwordRecoveryStep.step);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<MultiStepPasswordResetFormInputs>({
    resolver: yupResolver(MultiStepPasswordResetFormSchema),
  });

  const onSubmit: SubmitHandler<MultiStepPasswordResetFormInputs> = async (
    data
  ) => {
    console.log(data);
  };

  useEffect(() => {
    return () => {
      dispatch(resetPasswordRecoveryStep());
    };
  }, [dispatch]);

  const showUI = () => {
    switch (step) {
      case 0:
        return <Step1 />;

      case 1:
        return <Step2 />;

      case 2:
        return <Step3 />;
    }
  };
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="max-w-[30rem] mx-auto overflow-x-hidden"
    >
      <AnimatePresence mode="wait">{showUI()}</AnimatePresence>
    </form>
  );
};

export default MultiStepPasswordRecoveryForm;
