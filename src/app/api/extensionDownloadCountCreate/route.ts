import { NextRequest, NextResponse } from "next/server";
import connectDB from "../(connection)";
import ExtensionDownloadCount from "../(models)/extensionDownloadCount";
const jwt = require("jsonwebtoken");

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const requestBody = await req?.json();
    const { typeOfExtension, count } = requestBody;

    if (!typeOfExtension) {
      return createResponse(false, "Please provide typeOfExtension.");
    }

    const existingExtension = await ExtensionDownloadCount.findOne({
      isDeleted: false,
      typeOfExtension,
    });

    if (existingExtension) {
      return createResponse(false, "Already Created", "");
    }

    const createData = await ExtensionDownloadCount.create({ typeOfExtension , count});

    if (!createData) {
      return createResponse(false, "Extension count was not created", []);
    }

    return createResponse(true, "Extension created successfully", createData);

  } catch (error: any) {
    return createResponse(false, error.message || "An error occurred while processing your request.", []);
  }
}

function createResponse(success: boolean, message: string, data: any = null) {
  return NextResponse.json({ success, message, data });
}
