import Authentication from "@/components/auth/Authentication";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async() => {
  const session = await getServerSession();
  console.log( process.env.GITHUB_CLIENTID, process.env.GITHUB_CLIENT_SECRET, process.env.GOOGLE_CLIENTID, process.env.GOOGLE_CLIENT_SECRET,"process.env.GOOGLE_CLIENT_SECRET");
  console.log(session, "session-provider", );
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
