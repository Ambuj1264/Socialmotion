import { Buyyouproduct, SocialMenu, priceSocialMenu } from "@/utility/constant";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const BuyNow = () => {
  return (
    <>

      <div className="min-h-screen my-9">
      <div className="my-8 flex flex-col justify-center items-center ">
          <div className="p-5  border border-grey-450 w-96 rounded-md">
            <h2 className="text-center">
              {Buyyouproduct}
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly items-center ">
          {priceSocialMenu.map((value, index) => {
            return (
              <div key={index} className="mb-4 mx-8 my-4 ">
                <Card className="py-4" style={{ width: "fit-content" }}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{value?.name}</h4>
                    <small className="text-default-500 uppercase font-bold">
                      {value?.details}
                    </small>
                    <small className="text-default-500">{value?.toolNo}</small>
                    <h4 className="font-bold  text-green-600">
                      {value?.price ? `Price :  $ ${value?.price} ` : ""}
                    </h4>
                  </CardHeader>

                  <div className="flex justify-center my-5">
                    <Button color="primary" variant="shadow">
                      Buy Now
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BuyNow;
