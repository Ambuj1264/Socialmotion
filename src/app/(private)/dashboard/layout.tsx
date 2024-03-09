"use client";
import React, { ReactNode, Suspense, useEffect, useState } from "react";
import LoggedNavBar from "@/components/navbar/loggedNavbar";
import { Spinner } from "@nextui-org/react";


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <LoggedNavBar />
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
