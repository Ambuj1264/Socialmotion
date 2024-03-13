import React, { ReactNode, Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import Sidebar from "@/components/sidebar/Sidebar";
import { FacebookData } from "@/types/interface";
 
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {

  const FacebookData :FacebookData[] = [
    {
      key: "facebookextension",
      link: "/product/facebookextension",
      name: "Manage Extension",
    },
    {
      key: "becameamember",
      link: "/product/becameamember",
      name: "Became a Member",
    },
  ];
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="flex">

          <Sidebar data={FacebookData} />
        </div>
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
