import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import {
  loginUser,
  logoutUser,
  updateAvatarId,
  setUserWithNetworkError,
} from "../store/slices/user/UserSlice";
import { refresh } from "../utils/requests/auth";

export const useUser = (redirectTo: string) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  // Handles redirects
  useEffect(() => {
    if (redirectTo && user.isNull) {
      router.push(redirectTo);
    }
  }, [user, redirectTo, router]);

  // Handles user fetching
  useEffect(() => {
    let timeOutReference: any;

    const fetchUser = async () => {
      try {
        const res = await refresh();
        dispatch(loginUser(res.data));
        dispatch(updateAvatarId(res.data.avatarId));
      } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
          dispatch(setUserWithNetworkError());
        } else {
          dispatch(logoutUser());
        }
      }
    };

    if (user.isLoading) {
      fetchUser();
    } else {
      timeOutReference = setTimeout(() => fetchUser(), 5000);
    }

    const intervalReference = setInterval(() => {
      fetchUser();
    }, 14000 * 60);

    return () => {
      clearInterval(intervalReference);
      clearTimeout(timeOutReference);
    };
  }, []);

  return user;
};
