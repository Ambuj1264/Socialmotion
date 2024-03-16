import { NextRequest, NextResponse } from "next/server";
import DemoToolDetails from "../(models)/demoToolDetails";
import jwt, { JwtPayload } from "jsonwebtoken";
export async function POST(req: NextRequest) {
  const input = await req.json();
  try {
    const { token } = input;
    const decodedToken = (await jwt.verify(token, process.env.JWT_SECRET!)) as JwtPayload;
    if (decodedToken) {
      return NextResponse.json({
        success: true,
        message: "Token verified successfully",
        data: decodedToken,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Token verification failed",
        data: [],
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
