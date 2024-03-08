import Authentication from "@/components/auth/Authentication";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async() => {
  const session = await getServerSession();
  console.log(session, "session-provider");
  if (session) {
    redirect("/menu")
  }
  return (
    <>
      <Authentication />
    </>
  );
};

export default page;
