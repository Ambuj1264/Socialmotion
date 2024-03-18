import React, { ReactNode, Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import Sidebar from "@/components/sidebar/Sidebar";
import { FacebookData } from "@/utility/constant";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="flex min-h-screen">
          <Sidebar data={FacebookData} />
          <main className="w-full">{children}</main>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
