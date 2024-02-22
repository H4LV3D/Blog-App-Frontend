import React, { useEffect, useRef } from "react";
import SidebarLink from "./SidebarLink/SidebarLink";
import { motion } from "framer-motion";
import { hideMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logoutUser } from "@/store/slices/user/UserSlice";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/utils/requests/auth";
import { showNotification } from "@mantine/notifications";
import router from "next/router";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const MobileSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const path = usePathname();
  const links = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Blogs",
      link: "/bloga",
    },
    {
      page: "Dashboard",
      link: "/dashboard",
    },
    {
      page: "Blog Post",
      link: "/blog",
    },
    {
      page: "Settings",
      link: "/settings",
    },
  ];
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      dispatch(hideMobileSidebar());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const logOutMutation = useMutation({
    mutationFn: async () => {
      const res = await logout();
      return res;
    },
    onSuccess: () => {
      dispatch(logoutUser());
      router.push("/login");
    },
    onError: (error) => {
      showNotification({
        title: "Error",
        message: "An error occurred",
        color: "red",
        radius: "md",
      });
    },
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className="h-screen w-screen flex fixed top-0 left-0 z-40 bg-black bg-opacity-80"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit={{
          opacity: 0,
          x: -1000,
          transition: {
            duration: 0.3,
          },
        }}
        className="h-full w-[18rem] px-3 bg-white"
      >
        <div
          className={`h-[5.375rem] border-b border-gray-200 dark:border-border-bg-dark flex items-center pt-6 pl-3`}
        >
          <Link href={"/"}>
            <h3 className="font-[700] text-3xl md:text-4xl">Blogger</h3>
          </Link>
        </div>
        <div className="h-[calc(100%-5.375rem)] flex flex-col justify-between py-8">
          <ul className="mb-10">
            {links.map((item, index) => {
              return (
                <SidebarLink key={index} href={item.link} text={item.page} />
              );
            })}
          </ul>
          <ul>
            <SidebarLink href="/help" text="Get Help" />
            <SidebarLink href="/contact" text="Contact Us" />
            <button
              onClick={() => logOutMutation.mutate()}
              disabled={logOutMutation.isPending}
              className={`flex items-center font-[500] text-[.9rem] relative gap-6 h-12 px-4 rounded-xl mt-12 `}
            >
              {logOutMutation.isPending ? (
                <ButtonLoader />
              ) : (
                <span>Log Out</span>
              )}
            </button>
          </ul>
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideMobileSidebar())}
        className="h-full flex-1 "
      ></div>
    </motion.div>
  );
};

export default MobileSidebar;
