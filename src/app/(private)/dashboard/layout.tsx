"use client";

import useAuth from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { isLogin:isLoggedIn } = useAuth();
  console.log(isLoggedIn, "islogin");
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
