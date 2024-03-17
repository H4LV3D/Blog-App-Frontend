"use client";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import ShowNotification from "@/components/Notifications/ShowNotification";
import { subscribe } from "@/utils/requests/subscribe";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";

type Props = {};

function ForgotPasswordForm({}: Props) {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    subscribeMutation.mutate();
  };

  const subscribeMutation = useMutation({
    mutationFn: () => {
      const res = subscribe(email);
      return res;
    },
    onSuccess: (data: any) => {
      ShowNotification(data.data.message);
    },
    onError: (error) => {
      // @ts-ignore
      ShowNotification(error.response.data.message);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-[750px] mx-auto ">
          <div className="text-start pl-4">
            <label
              htmlFor="email"
              className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-ralewaytext-start "
            >
              Email
            </label>
          </div>
          <div className="flex items-center space-x-6 text-black w-full mb-3">
            <div className="w-full">
              <input
                id="email"
                type="email"
                autoComplete="on"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full font-clash rounded-[0.5rem] py-[0.85rem] px-5 font-[400] text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border border-neutral-300 hover:border-neutral-700 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
              />
            </div>
            <button
              type="submit"
              disabled={subscribeMutation.isPending}
              className="bg-black h-[3.5rem] px-10 text-white font-[500] rounded-[0.5rem] flex items-center space-x-2 "
            >
              {subscribeMutation.isPending ? (
                <ButtonLoader />
              ) : (
                <>
                  <i className="fas fa-paper-plane fa-lg fa-fw"></i>
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
