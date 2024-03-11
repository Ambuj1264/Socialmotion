"use client";
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Spinner } from "@nextui-org/react";
import Sidebar from "@/components/sidebar/Sidebar";

function ManageExtensions() {
  // const { authToken, loginId } = useLocalStorage();
  const [checkApproval, setCheckApproval] = useState<any>();
  const [loginUser, setLoginUser] = useState();

  // useEffect(() => {
  //   const loggedUser = JSON.parse(localStorage.getItem("USer"))?.login;
  //   setLoginUser(loggedUser?.id);
  //   checkcheckoutAccess();
  // }, [loginUser, checkApproval]);

  // const [checkoutUserAccess, { loading }] = useMutation(
  //   checkoutUserSubscription,
  //   {
  //     context: {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     },
  //   }
  // );

  // const checkcheckoutAccess = async () => {
  //   try {
  //     const result = await checkoutUserAccess({
  //       variables: {
  //         userId: loginId,
  //       },
  //     });
  //     setCheckApproval(result?.data?.subscriptionCheckByUser?.approved);
  //   } catch (error:any) {
  //     setCheckApproval(false);
  //     throw new Error(error?.message);
  //   }
  // };

  const myExtension = (url: string) => {
    location.href = url;
  };

  // if (loading) {
  //   return <Spinner />;
  // }
  const FacebookData = [
    {
      key: "facebookextension",
      link: "/product/facebookextension",
      name:"Manage Extension"
    },
    {
      key: "becameamember",
      link: "/product/becameamember",
      name:"Became a Member"
    },
  ];

  return (
    <>
      <div className="flex min-h-screen justify-center w-full overflow-hidden">
        <Sidebar data={FacebookData}/>
        <div className="m-10 ">
          <div className="flex justify-center ">
            <div className="p-4 w-full">
              <div className="text-center">
                <h3 className="text-3xl mb-2">Free Version Extension</h3>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => myExtension("/extension/Free.zip")}
                >
                  Download Chrome extension
                </button>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="hidden md:block">
                <div className="h-full border-l border-gray-300 absolute top-0"></div>
              </div>
            </div>
            <div className="py-4 pr-4 flex justify-center items-center w-full">
              <div className="text-center">
                <h3 className="text-3xl mb-2">Paid Version Extension</h3>
                {checkApproval ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      myExtension("/extension/Paid8523147fasdfasdf.zip")
                    }
                  >
                    Download Chrome extension
                  </button>
                ) : (
                  <div className="inline-block">
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                      Download Chrome extension
                    </button>
                    <div className="text-sm text-gray-500 mt-2">
                      This option will be available when you become a member
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageExtensions;
