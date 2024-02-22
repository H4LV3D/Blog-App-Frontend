"use client";
import React, { useState, useRef } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { resendOtp, verifyOtp } from "@/utils/requests/auth";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  decreasePasswordRecoveryStep,
  increasePasswordRecoveryStep,
} from "@/store/slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import { MultiStepPasswordResetFormInputs } from "../MultiStepPasswordResetForm.interface";
import PrimaryButton from "@/components/shared/buttons/Primary";
import { useMutation } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";

interface Props {}

interface FormInput {
  email: string;
  code: number;
}

const Step2: React.FC<Props> = ({}) => {
  const {
    trigger,
    watch,
    formState: { errors },
    setValue,
  } = useForm<MultiStepPasswordResetFormInputs>();

  const [loading, setLoading] = useState<boolean>(false);
  const [resendingEmail, setResendingEmail] = useState<boolean>(false);
  const [otpInputs, setOtpInputs] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const selectedEmail = useAppSelector(
    (state) => state.passwordRecoveryStep.selectedEmail
  );
  const dispatch = useAppDispatch();

  // Function to handle changes in the OTP input boxes
  const handleInputChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
      setOtpInputs(newOtpInputs);
      const newCode = Number(newOtpInputs.join(""));
      setValue("code", newCode);

      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && !otpInputs[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClick = async () => {
    try {
      setResendingEmail(true);
      const res = await resendOtp(selectedEmail);
    } catch {
    } finally {
      setResendingEmail(false);
    }
  };

  const handleNext = async () => {
    const isValid = await trigger(["code"]);
    if (!isValid) return;
    mutation.mutate();
  };

  const code = watch("code");
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await verifyOtp(selectedEmail, code);
      return res;
    },
    onSuccess: (data) => {
      showNotification(data.data.message);
      dispatch(increasePasswordRecoveryStep());
    },
    onError: (error) => {
      console.log(error);
      // @ts-ignore
      showNotification(error.response.data.message);
    },
  });

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1 font-semibold text-[1.5rem]">Enter OTP</h1>
        <p className="text-sm">
          Enter the 4-digit code that we sent to your email
        </p>
      </div>
      <div className="grid gap-[2rem] w-full sm:min-w-[350px] mb-8">
        <div className="w-full flex items-center  gap-x-2">
          {otpInputs.map((value, index) => (
            <input
              key={index}
              type="text"
              name={`otp-${index}`}
              id={`otp-${index}`}
              maxLength={1} // Limit input to one character
              className="h-[3rem] w-[3rem] border focus:border-black rounded-lg text-[2rem] text-[#000] flex items-center justify-center pl-[1rem] outline-none"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(input) => (inputRefs.current[index] = input)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className=" mb-2 text-gray-600 text-sm">
          Didn&apos;t receive the code?{" "}
          <button
            disabled={resendingEmail}
            onClick={() => handleClick()}
            className="text-[#000]"
          >
            <span>Resend</span>
          </button>
        </p>
        <div className="grid place-items-center gap-y-3 mb-[1.25rem]">
          <PrimaryButton
            loading={loading}
            text="Verify"
            type="button"
            action={handleNext}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(decreasePasswordRecoveryStep());
            }}
            disabled={loading}
            className="h-[3.5rem] w-full bg-transparent border border-neutral-500 text-neutral-500 hover:text-[#0e0e0e] hover:border-[#0e0e0e] font-semibold rounded-lg"
          >
            <span>Back</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
