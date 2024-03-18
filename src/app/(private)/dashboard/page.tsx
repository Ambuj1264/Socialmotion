import React, { Suspense } from "react";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";
import Skeletons from "@/components/themes/Skeltons";
import { SocialMenu } from "@/utility/constant";

const Menu = () => {
  return (
    <Suspense fallback={<Skeletons />}>
      <div className=" my-8 flex flex-col justify-center items-center">
        <div className="p-5  border border-grey-600 w-96 rounded-md">
          <h2 className="text-center">Automate Your Social Media</h2>
        </div>
        <div className="min-h-screen my-9">
          <div className="flex flex-wrap justify-evenly items-center">
            {SocialMenu.map((value, index) => {
              return (
                <div key={index} className="mb-4 mx-8 my-4 ">
                  <Link href={value?.addr}>
                    <Card className="py-4" style={{ width: "fit-content" }}>
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">
                          {value?.details}
                        </p>
                        <small className="text-default-500">
                          {value?.toolNo}
                        </small>
                        <h4 className="font-bold text-large">{value?.name}</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          isZoomed
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src={value?.imgAddr}
                          width={"270px"}
                          height={"177px"}
                          style={{ width: "270px", height: "177px" }}
                        />
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Menu;
