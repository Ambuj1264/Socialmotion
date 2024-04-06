
import React, { ReactNode } from "react";
const Layout: React.FC<{ children: ReactNode }> = async({ children }) => {
  return (
    <>
        {children}
    </>
  );
};

export default Layout;
