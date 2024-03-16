import { NextRequest, NextResponse } from "next/server";
import DemoToolDetails from "../(models)/demoToolDetails";

export async function POST(req: NextRequest) {
  const input = await req.json();
  try {
    const { toolName, videoLink, toolUniqueName, toolExtras, toolDetails }: CreateDemoToolInput = input;
    const findCreateDemo = await DemoToolDetails.findOne({
      toolUniqueName: toolUniqueName.trim(),
      isDeleted: false,
    });
    if (findCreateDemo) {
      return NextResponse.json({
        success: false,
        message: "Already Created this tool",
        data: findCreateDemo,
      });
    }
    const createDemo = await DemoToolDetails.create({
      toolName,
      videoLink,
      toolUniqueName,
      toolExtras,
      toolDetails,
    });

    return NextResponse.json({
      success: true,
      message: "Demo tool created successfully",
      data: createDemo,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
export interface CreateDemoToolInput {
  toolName?: string;
  videoLink?: string;
  toolDetails?: string;
  toolExtras?: string;
  toolUniqueName: string;
}
