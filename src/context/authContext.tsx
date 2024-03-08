import { clearCookie, getCookie } from "@/hook/cookies";
import React, { useEffect, useState } from "react";

const useAuth = () => {

  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    const token = getCookie("authtoken");
    if(token){
      setIsLogin(true)
    }
  },[isLogin])
  const signout = () => {
    setIsLogin(false);
    clearCookie("authtoken")
  };

  return { isLogin, signout };
};

export default useAuth;
