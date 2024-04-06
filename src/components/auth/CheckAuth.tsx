"use client";
import { useSession } from "next-auth/react";

const CheckAuth = () => {
  const { data: session, status } = useSession();
  if (status !== "loading") {
    localStorage.setItem("user", JSON.stringify(session?.user));
  }
};

export default CheckAuth;
