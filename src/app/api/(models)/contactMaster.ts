import mongoose, { model, models } from "mongoose";
const contactSchema = new mongoose.Schema(
  {

    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    mobileNumber: {
      type: String,
      required: true,
    }
 
  },
  {
    timestamps: true,
  }
);

const ContactMAster = models.contactmaster || model("contactmaster", contactSchema);
export default ContactMAster;
