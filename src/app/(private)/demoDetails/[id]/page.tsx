"use client";
import { Button } from "@/components/ui/moving-border";
import { demoToolDetails } from "@/hook/query/demoToolDetails";
import { useQuery } from "@apollo/client";
import { Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";
import React from "react";
import BuyNow from "./BuyNow";

const DemoVideoDetails = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { loading, data } = useQuery(demoToolDetails, {
    variables: {
      toolUniqueName: id,
    },
  });
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Assuming the parent container occupies the full width
          height: "100vh",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="my-8 flex flex-col justify-center items-center ">
          <div className="p-5  border border-grey-450 w-96 rounded-md">
            <h2 className="text-center">
              {data?.FindDemoToolDetails?.toolName}
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center lg:px-44 md:px-20 px-5">
            {" "}
            {data?.FindDemoToolDetails?.toolDetails}
          </p>
        </div>
        <div className="flex mt-8 flex-col justify-center items-center sm:w-full">
          <iframe
            width={window.innerWidth < 640 ? "93%" : "560"} // Adjust the breakpoint as needed
            height="315"
            src={data?.FindDemoToolDetails?.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex my-8 flex-col justify-center items-center ">
          <BuyNow />
        </div>
      </div>
    </>
  );
};

export default DemoVideoDetails;
