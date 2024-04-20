"use client";
import { TestimonialType } from "@/types/interface";
import { TestimonialDetails } from "@/utility/constant";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 600, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="slider-container py-11">
      <Slider {...settings}>
        {TestimonialDetails.map((value: TestimonialType, index: number) => (
          <div key={index} className="mb-4 mx-8 my-4 ">
            <Card className="py-4" style={{ width: "300px" }} key={index}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                  alt="Card background"
                  className="object-contain rounded-xl"
                  src={value?.image}
                  width={270}
                  height={177}
                  style={{ width: "270px", height: "177px" }}
                />
                <h4 className="font-bold text-large">{value?.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-tiny  font-bold" style={{ width: "270px" }}>
                  {value?.feedback}
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
