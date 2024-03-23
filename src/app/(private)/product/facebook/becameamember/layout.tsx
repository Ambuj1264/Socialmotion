"use client";
import Loader from '@/components/Loader/Loader';
import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
    const {data:session,status} = useSession();
    if(status === "loading"){
        <Loader />
    }else{
        localStorage.setItem("user", JSON.stringify(session?.user))
    }
  return (
    <div>{children}</div>
  )
}

export default Layout