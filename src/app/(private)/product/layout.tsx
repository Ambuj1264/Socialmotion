"use client";
import React, { ReactNode, Suspense } from "react";
import { Spinner } from "@nextui-org/react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
      <div className="flex">
       
        <main className="flex-1 z-20">{children}</main>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
