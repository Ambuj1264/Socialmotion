"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Button, Card, CardHeader } from "@nextui-org/react";
import { BuySingleproduct, priceSocialMenu } from "@/utility/constant";
import { useParams } from "next/navigation";
import { errorToast, successToast } from "@/utility/Toast";
import axios from "axios";
import Loader from "@/components/Loader/Loader";
import { GetLocalStorageData } from "@/utility/storage";
import { useRouter } from "next/navigation";
const BuyComponent = () => {
  const [paymentStatusCheck, setPaymentStatusCheck] = useState(false);

  const { id }: any = useParams();
  const router = useRouter();
  const data = priceSocialMenu.filter(
    (value) => value?.name == id?.charAt(0).toUpperCase() + id?.slice(1)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const userData: any = GetLocalStorageData("user");

  const userID = userData?._id;
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

      if (paymentStatusCheck) {
        router.push("/dashboard");
      }
      else{
        setLoading(false);
      }
    };
    fetchData();
  }, [userID, checkPayment, paymentStatusCheck, router]);

  if (loading) {
    return <Loader />;
  }
  //handler
  const handler = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/paymentCheckout", {
        userId: userID,
      });
      if (result.data) {
        successToast("success");
        window.location.href = result?.data?.data;
      } else {
        errorToast("error");
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
    {
        paymentStatusCheck ?( <Loader />) :   
        <Suspense fallback={<Loader />}>
        <div className="flex justify-center items-center">
          <div className="min-h-screen my-9">
            <div className="my-2 flex flex-col justify-center items-center ">
              <div className="p-5  border border-grey-450 w-96 rounded-md">
                <h2 className="text-center">{BuySingleproduct}</h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly items-center ">
              <div className="mb-4 mx-8 my-4 ">
                <Card className="py-4" style={{ width: "fit-content" }}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{data[0]?.name}</h4>
                    <span className="text-default-500 uppercase font-bold">
                      {data[0]?.details}
                    </span>
                    <small className="text-default-500">
                      {data[0]?.toolNo}
                    </small>
                    <h4 className="font-bold  text-green-600">
                      {data[0]?.price ? `Price :  $ ${data[0]?.price} ` : ""}
                    </h4>
                  </CardHeader>

                  <div className="flex justify-center my-5">
                    <Button color="primary" variant="shadow" onClick={handler}>
                      Buy Now
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    }
    
    </>
  );
};

export default BuyComponent;
