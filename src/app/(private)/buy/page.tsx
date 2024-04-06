"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/Loader/Loader";
import { errorToast, successToast } from "@/utility/Toast";
import { buyYourProduct, priceSocialMenu } from "@/utility/constant";
import { GetLocalStorageData } from "@/utility/storage";
import { Button, Card, CardHeader } from "@nextui-org/react";

const BuyNow = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [paymentStatusCheck, setPaymentStatusCheck] = useState<boolean>(false);
  const userData: any = GetLocalStorageData("user");
  const userID = userData?._id;
  const router = useRouter();

  const checkPayment = useCallback(async () => {
    try {
      const response = await axios.post("/api/checkApproval", {
        _id: userID,
      });
      setPaymentStatusCheck(response?.data?.data?.approved);
    } catch (error: any) {
      console.log(error.message);
    }
  }, [userID]);

  useEffect(() => {
    const fetchData = async () => {
      await checkPayment();
      setLoading(false);
    };
    fetchData();
  }, [checkPayment]);

  useEffect(() => {
    if (paymentStatusCheck) {
      router.push("/dashboard");
    }
  }, [paymentStatusCheck, router]);

  const handler = async (data: string) => {
    try {
      if (data === "Facebook") {
        const result = await axios.post("/api/paymentCheckout", {
          userId: userID,
        });

        if (result.data) {
          successToast("success");
          window.location.href = result?.data?.data;
        } else {
          errorToast("error");
        }
      }
    } catch (error: any) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {paymentStatusCheck ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <div className="min-h-screen my-9">
            <div className="my-8 flex flex-col justify-center items-center ">
              <div className="p-5  border border-grey-450 w-96 rounded-md">
                <h2 className="text-center">{buyYourProduct}</h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly items-center ">
              {priceSocialMenu.map((value, index) => {
                return (
                  <div key={index} className="mb-4 mx-8 my-4 ">
                    <Card className="py-4" style={{ width: "fit-content" }}>
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className="font-bold text-large">{value?.name}</h4>
                        <small className="text-default-500 uppercase font-bold">{value?.details}</small>
                        <small className="text-default-500">{value?.toolNo}</small>
                        <h4 className="font-bold  text-green-600">{value?.price ? `Price :  $ ${value?.price} ` : ""}</h4>
                      </CardHeader>

                      <div className="flex justify-center my-5">
                        <Button color="primary" variant="shadow" onClick={() => handler(value?.name)}>
                          Buy Now
                        </Button>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Suspense>
      )}
    </>
  );
};

export default BuyNow;
