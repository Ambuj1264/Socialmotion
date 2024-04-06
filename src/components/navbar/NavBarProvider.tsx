"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LoggedNavBar from "@/components/navbar/loggedNavbar";
import FullNavbar from "@/components/navbar/Navbar";

const NavBarProvider = () => {
  const [session, setSession] = useState<any>(null);

  const { data: sessionData, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
    } else if (status === "authenticated") {
      setSession(sessionData);
      localStorage.setItem("user", JSON.stringify(sessionData?.user));
    } else {
      setSession(null);
    }
  }, [sessionData, status]);

  return <>{session ? <LoggedNavBar data={session.user} /> : <FullNavbar />}</>;
};

export default NavBarProvider;
