"use client";
import FullNavbar from "@/components/navbar/Navbar";
import useAuth  from "@/context/authContext";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { ReactNode, Suspense, useEffect } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
 
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <FullNavbar />
        {children}
      </Suspense>
    </>
  );
};

export default Layout;