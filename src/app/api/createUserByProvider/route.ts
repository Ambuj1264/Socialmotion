import { NextRequest, NextResponse } from "next/server";
import Users from "../(models)/user";
import connectDB from "../(connection)";
import { UserRequestBody } from "@/types/interface";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const requestBody = await req?.json();
    const { email, image, name }: UserRequestBody = requestBody;
    if (!email) {
      return NextResponse.json({
        success: false,
        message: "Please provide email.",
      });
    }
    const lowercaseLoginName = email.trim().toLowerCase();
    const findUser: any = await Users.findOne({
      email: lowercaseLoginName,
      isDeleted: false,
    });

    if (findUser) {
      return NextResponse.json({
        success: false,
        message: "User finded",
        data: findUser,
      });
    } else {
      const createUser = await Users.create({
        email: email.trim().toLowerCase(),
        name: name?.trim(),
        image,
      });

      if (!createUser) {
        return NextResponse.json({
          success: false,
          message: "User was not created",
          data: [],
        });
      } else {
        return NextResponse.json({
          success: true,
          message: "User created successfully",
          data: createUser,
        });
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while processing your request.",
      data: [],
    });
  }
}
