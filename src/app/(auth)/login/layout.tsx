import { Spinner } from "@nextui-org/react";
import React, { ReactNode, Suspense } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </>
  );
};

export default Layout;
