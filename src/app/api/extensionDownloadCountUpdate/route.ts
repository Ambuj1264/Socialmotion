import { NextResponse } from "next/server";
import ExtensionDownloadCount from "../(models)/extensionDownloadCount";
import connectDB from "../(connection)";

export async function PATCH() {
  try {
    await connectDB();
    const findCreateDemo = await ExtensionDownloadCount.updateOne(
      {
        isDeleted: false,
      },
      {
        $inc: {
          count: 1,
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: "updated succefully",
      data: findCreateDemo,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
