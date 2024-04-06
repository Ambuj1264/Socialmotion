import React, { useState, useEffect } from "react";
import LoggedNavBar from "@/components/navbar/loggedNavbar";
import FullNavbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";

const NavBarProvider =async () => {
  const session =await getServerSession();

  return <>{session ? <LoggedNavBar data={session?.user} /> : <FullNavbar />}</>;
};

export default NavBarProvider;
