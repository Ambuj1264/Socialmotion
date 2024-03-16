"use client";
import React from "react";
import { Button, Card, CardHeader, Spinner } from "@nextui-org/react";
import { BuySingleproduct, priceSocialMenu } from "@/utility/constant";
import { useParams } from "next/navigation";
import { useMutation } from "@apollo/client";
import { paymentCheckout } from "@/hook/mutations/payment";
import { errorToast, successToast } from "@/utility/Toast";
const BuyComponent = () => {
  const { id } :any= useParams();
  const data = priceSocialMenu.filter((value) => value?.name==id?.charAt(0).toUpperCase() + id?.slice(1));
    const [paymentcheckout,loading] = useMutation(paymentCheckout,
  //      {
  //   context: {
  //     headers: {
  //       Authorization: `Bearer ${authKey}`,
  //     },
  //   },
  // }
  );
    const handler =async()=>{
      try {
        const result = await paymentcheckout({
          variables: {
            userId:"65ec8f661ec78b2e8bac69b5",
          },
        });
  
        if (result.data) {
          successToast("success");
          window.location.href = result?.data?.paymentCheckout;
        }
      } catch (error: any) {
        errorToast(error.message);
      }
    }

    if(loading){
      return <Spinner/>

    }
  return (
    <>
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
                  <small className="text-default-500 uppercase font-bold">
                    {data[0]?.details}
                  </small>
                  <small className="text-default-500">{data[0]?.toolNo}</small>
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
    </>
  );
};

export default BuyComponent;
