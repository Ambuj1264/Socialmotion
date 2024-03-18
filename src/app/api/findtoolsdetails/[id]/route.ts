import { NextRequest, NextResponse } from "next/server";
import DemoToolDetails from "../../(models)/demoToolDetails";
import connectDB from "../../(connection)";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const findCreateDemo = await DemoToolDetails.findOne({
      toolUniqueName: params?.id,
      isDeleted: false,
    });
    return NextResponse.json({
      success: true,
      message: "Demo tool find successfully",
      data: findCreateDemo,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
