import React, { useState, useRef } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useForm, SubmitHandler } from "react-hook-form";
import { Step2Schema } from "./Step2.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useRouter } from "next/navigation";
import { resendOtp, verifyEmail } from "@/utils/requests/auth";
import { useAppSelector } from "@/hooks/useAppSelector";

interface FormInputs {
  code: number;
}

const Step2: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [resendingEmail, setResendingEmail] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedEmail = useAppSelector((state) => state.authStep.selectedEmail);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(Step2Schema),
  });

  const [otpInputs, setOtpInputs] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Function to handle changes in the OTP input boxes
  const handleInputChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
      setOtpInputs(newOtpInputs);
      const code = Number(newOtpInputs.join(""));
      setValue("code", code);

      if (index < 5) {
        // Auto-focus on the next input box
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

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setLoading(true);
      const res = await verifyEmail(selectedEmail, data.code);
      router.push("/login");
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        console.log("hello ");
      } else if (error.response?.data?.returnedUser?.verified === false) {
        router.push("/signup");
      } else {
        console.log(error.response?.data?.message);
      }
    } finally {
      setLoading(false);
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-[1rem]">
          <div className=" ">
            <div className="space-y-1 pb-4 ">
              <h1 className="font-semibold text-[1.5rem]">
                Complete your sign up
              </h1>
              <p className="text-sm ">
                Enter the 6-digit code that we sent to your email
              </p>
            </div>
            <div className="grid ">
              <div className="w-full flex items-center gap-x-2">
                {otpInputs.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`otp-${index}`}
                    id={`otp-${index}`}
                    maxLength={1} // Limit input to one character
                    className="h-[3.5rem] w-[3.5rem] border rounded-lg text-[2rem] text-[#000] flex items-center justify-center pl-[1.25rem]"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(input) => (inputRefs.current[index] = input)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-center mb-[1.25rem]">
              Didn&apos;t receive the code?{" "}
              <button
                type="button"
                disabled={resendingEmail}
                onClick={() => handleClick()}
                className="text-[#000] font-[500] "
              >
                <span>Resend</span>
              </button>
            </p>
            <div className="grid place-items-center">
              <button
                type="submit"
                disabled={loading}
                className="h-[3.5rem] w-full max-w-[21rem] bg-[#000] text-white text-lg font-semibold rounded-[0.5rem] "
              >
                {loading ? <ButtonLoader /> : <span>Verify Email</span>}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step2;
