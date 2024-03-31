"use client";
import Loader from "@/components/Loader/Loader";
import { getLocalStorageData } from "@/utility/storage";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { Suspense, useCallback, useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [paymentStatusCheck, setPaymentStatusCheck] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "loading") {
        return; // No need to proceed if session status is still loading
      }

      // Assuming session is loaded at this point
      localStorage.setItem("user", JSON.stringify(session?.user));
      const userData: any = getLocalStorageData("user");
      const userID = userData?._id;

      try {
        const response = await axios.post("/api/checkApproval", { _id: userID });
        setPaymentStatusCheck(response?.data?.data?.approved);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status]);

  useEffect(() => {
    if (paymentStatusCheck) {
      router.push("/dashboard");
    }
  }, [paymentStatusCheck]);

  if (status === "loading" || loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
};

export default Layout;

