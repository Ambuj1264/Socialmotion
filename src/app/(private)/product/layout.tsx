import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { FacebookData } from "@/utility/constant";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  return (
    <>
        <div className="flex min-h-screen">
          <Sidebar data={FacebookData} />
          <main className="w-full">{children}</main>
        </div>

    </>
  );
};

export default Layout;
