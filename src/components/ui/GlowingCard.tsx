"use client";
import React from "react";
import Image from "next/image";
import BackgroundGradient from "./BackgroundGradient";
import { TestimonialType } from "@/types/interface";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

function BackgroundGradientDemo({ image, name, feedback }: TestimonialType) {
  return (
    <div className="my-8">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image alt="Card background" className="object-cover rounded-xl" src="/images/hero-card-complete.jpeg" width={270} />
        </CardBody>
      </Card>
    </div>
  );
}

export default BackgroundGradientDemo;
