"use client";
import { demoToolDetails } from "@/hook/query/demoToolDetails";
import { useQuery } from "@apollo/client";
import { Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";
import React from "react";

const DemoVideoDetails = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { loading, data } = useQuery(demoToolDetails, {
    variables: {
      toolUniqueName: id,
    },
  });
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className=" my-8 flex flex-col justify-center items-center">
        <div className="p-5  border border-grey-450 w-96 rounded-md">
          <h2 className="text-center">{data?.FindDemoToolDetails?.toolName}</h2>
        </div>
      </div>
    </>
  );
};

export default DemoVideoDetails;
