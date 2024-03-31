import Loader from "@/components/Loader/Loader";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
