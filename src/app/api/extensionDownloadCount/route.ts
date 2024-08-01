import { NextResponse } from "next/server";
import ExtensionDownloadCount from "../(models)/extensionDownloadCount";
import connectDB from "../(connection)";
export async function GET() {
  try {
    await connectDB();
    const data = await ExtensionDownloadCount.findOne({
      isDeleted: false,
    });

    return NextResponse.json({
      success: true,
      message: "updated succefully",
      data: data,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
