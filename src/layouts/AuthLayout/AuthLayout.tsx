"use client";
import React, { useEffect } from "react";
import TetiaryButton from "@/components/shared/buttons/Tetiary";
import { motion } from "framer-motion";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateAvatarId } from "@/store/slices/user/UserSlice";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  form: string;
};

function AuthLayout({ children, form }: Props) {
  const step = useAppSelector((state) => state.passwordRecoveryStep.step);
  const avatarId = useAppSelector((state) => state.user.avatarId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (form === "signup") {
      dispatch(updateAvatarId(Math.floor(Math.random() * 100) + 1));
    } else {
      avatarId === null ? dispatch(updateAvatarId(null)) : null;
    }
  }, [form]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 items-center md:overflow-y-hidden min-h-screen dark:bg-[#191919]`}
    >
      <div className="w-full h-screen border bg-white hidden lg:block">
        <div className="mx-8 min-h-screen overflow-hidden">
          {form !== "signup" && step !== 2 ? (
            <>
              <div className="flex flex-col justify-center items-center min-h-screen">
                <Link href="/">
                  <h3 className=" font-[700] text-4xl mb-6">Blogger</h3>
                </Link>
                <div className="w-[275px] h-[330px] p-4 border dark:border-neutral-700 rounded-lg hover:shadow-xl ">
                  {avatarId === null ? (
                    <div className="w-full h-[330px] flex items-center justify-center relative">
                      <ButtonLoader color="#000" />
                    </div>
                  ) : (
                    <Image
                      src={`/assets/Bust/peep-${avatarId}.svg`}
                      className="mx-auto"
                      loading="lazy"
                      width={275}
                      height={330}
                      alt="A vector illustration"
                    />
                  )}
                </div>
                <p className="max-w-md mx-auto mt-8 text-center text-sm sm:text-base md:text-xl font-normal text-gray-700 dark:text-neutral-400 font-raleway">
                  {form === "login"
                    ? avatarId === null
                      ? "Enter your email to see your custom illustration"
                      : "Welcome back, Amazing stories, news, talks and information today."
                    : "Reset your custom illustration by selecting a different illustration."}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="px-10 xl:px-4">
                <p className="w-full  xl:w-1/2 mx-auto mt-8 text-center text-sm sm:text-base md:text-xl font-normal text-gray-700 dark:text-neutral-400 font-raleway">
                  {form === "signup"
                    ? "Pick a custom illustration for your profile by selecting one of the options below."
                    : "Reset your custom illustration by selecting a different illustration."}
                </p>
              </div>
              <div className="relative mx-auto overflow-y-auto marquee-height">
                <div className="grid grid-cols-4 lg:grid-cols-5 overflow-y-auto gap-x-3 space-y-3 p-6 ">
                  {[...Array(100)].map((_, index) => (
                    <button
                      key={index + 1}
                      className={`mb-2 ${
                        avatarId === index + 1 ? "border-black" : ""
                      } border focus:border-black hover:border-neutral-700 rounded-xl  hover:shadow-xl hover:shadow-neutral-100 dark:border-neutral-700 `}
                      onClick={() => {
                        dispatch(updateAvatarId(index + 1));
                      }}
                    >
                      <Image
                        src={`/assets/Bust/peep-${index + 1}.svg`}
                        loading="lazy"
                        className="mx-auto "
                        width={85}
                        height={85}
                        alt="A vector illustration of a boy holding a laptop open before him"
                        onClick={() => {
                          dispatch(updateAvatarId(index + 1));
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`w-full min-h-screen flex items-center justify-center bg-[#F7F7F7]`}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <div className="border border-black rounded-xl p-6 sm:p-12 lg:p-10 mx-12 xl:p-12 shadow-lg">
            <div className="mb-1">
              <TetiaryButton text="Back" link="/" small={true} />
            </div>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthLayout;
