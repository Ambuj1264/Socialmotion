import mongoose, { model, models } from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    count: {
      type: Number,
      required: true,
    },

    typeOfExtension: {
      type: String,
      default: "PRO",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ExtensionDownloadCount =
  models.extensiondownloadcount ||
  model("extensiondownloadcount", contactSchema);
export default ExtensionDownloadCount;
// src\app\api\extensionDownloadCount\route.ts
