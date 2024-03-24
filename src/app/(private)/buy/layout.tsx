"use client"
import Loader from "@/components/Loader/Loader";
import { getLocalStorageData } from "@/utility/storage";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
  const [paymentStatusCheck, setPaymentStatusCheck] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    <Loader />;
  } else {
    localStorage.setItem("user", JSON.stringify(session?.user));
  }
  const [loading, setLoading] = useState<boolean>(false);
  const userData: any = getLocalStorageData("user");

  const userID = userData?._id;
  const checktPayment = useCallback(async () => {
    try {
      const response = await axios.post("/api/checkApproval", {
        _id: userID,
      });
      setPaymentStatusCheck(response?.data?.data?.approved);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await checktPayment();
      console.log(paymentStatusCheck, "paymentStatusCheck");
      if (paymentStatusCheck) {
        router.push("/dashboard");
      }
    };
    fetchData();
  }, [userID, checktPayment, paymentStatusCheck]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    {children}</>
  )
}

export default Layout