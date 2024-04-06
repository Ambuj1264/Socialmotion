import { Spinner } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import React, { ReactNode, Suspense } from "react";

const Layout: React.FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <>
      <Suspense fallback={<Spinner />}>
     
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
