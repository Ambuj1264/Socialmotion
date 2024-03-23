import { NextRequest, NextResponse } from "next/server";
import connectDB from "../(connection)";
import Subscribes from "../(models)/subscribe";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const requestBody = await req?.json();
    const { _id }: {_id: string} = requestBody;
      const login = await Subscribes.findOne({ userId: _id, isDeleted:false });
      return NextResponse.json({
        success: true,
        message:"Data Finded",
        data: login,
      });
      
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while processing your request.",
      data: [],
    });
  }
}
