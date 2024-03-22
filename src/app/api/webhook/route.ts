import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import Subscribes from "../(models)/subscribe";
import Users from "../(models)/user";
import { Session } from "@/types/interface";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const endpointSecret = process.env.STRIPE_ENDPOINTSECRET!;

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  const sig: any = headers().get("Stripe-Signature") as string;
  try {
    const event = await stripe.webhooks.constructEvent(
      rawBody,
      sig,
      endpointSecret
    );
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        break;
      case "checkout.session.async_payment_succeeded":
        break;
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(event.data.object as Session);
        break;
      case "payment_intent.succeeded":
        await handlePaymentIntentSucceeded(event.data.object as any);
        break;
      case "checkout.session.expired":
        break;
      default:
        console.log(`Unhandled event`);
        break;
    }
    return NextResponse.json({
      success: true,
      message: "success",
      data: event,
    });
  } catch (err: any) {
    return NextResponse.json({
      error: err.message,
      success: false,
      message: "Webhook Error: " + err.message,
    });
  }
}

async function handleCheckoutSessionCompleted(session: Session) {
  try {
    const customer: any = await stripe.customers.retrieve(session.customer);
    const customerId = customer?.metadata?.userId;
    const billingDate = session.created;
    const formattedBillingDate = new Date(billingDate * 1000).toISOString();
    const inputDate = new Date(formattedBillingDate);

    const findUser = await Subscribes.findOne({
      userId: customerId,
      isDeleted: false,
    });
    if (!findUser) {
      const updateUserPayment = await Subscribes.create({
        userId: customerId,
        billingDate: inputDate,
        paid: true,
        approved: true,
        amount: session.amount_total / 100,
      });

      const Userdata = await Users.findOneAndUpdate(
        { _id: customerId },
        {
          $set: { subscribed: true, approved: true },
        },

        { new: true }
      );
    } else {
      const updateSub = await Subscribes.findOneAndUpdate(
        { userId: customerId },
        {
          billingDate: inputDate,
          paid: true,
          approved: true,
          amount: session.amount_total / 100,
        },
        {
          new: true,
        }
      );

      const resultForUpdate = await Users.findOneAndUpdate(
        { _id: customerId },
        {
          $set: { subscribed: true, approved: true },
        },
        { new: true }
      );
    }
  } catch (error:any) {
    console.log("Error handling checkout session completed:", error.message);
    throw error;
  }
}

async function handlePaymentIntentSucceeded(session: Session) {
  try {
    const customer: any = await stripe.customers.retrieve(session.customer);
    const customerId = customer?.metadata.userId;
    const billingDate = session.created;
    const formattedBillingDate = new Date(billingDate * 1000).toISOString();
    const inputDate = new Date(formattedBillingDate);

    const findUser = await Subscribes.findOne({
      userId: customerId,
      isDeleted: false,
    });
    if (!findUser) {
      const updateUserPayment = await Subscribes.create({
        userId: customerId,
        billingDate: inputDate,
        paid: true,
        approved: true,
        amount: session.amount_total / 100,
      });
      const updateUser = await Users.findOneAndUpdate(
        { _id: customerId },
        { subscribed: true, approved: true },
        { new: true }
      );
    } else {
      const updateSubs = await Subscribes.findOneAndUpdate(
        { userId: customerId },
        {
          $set: {
            userId: customerId,
            billingDate: inputDate,
            paid: true,
            approved: true,
            amount: session.amount_total / 100,
          },
        }
      );
      const updateUSer = await Users.findOneAndUpdate(
        { _id: customerId },
        { $set: { subscribed: true, approved: true } },
        { new: true }
      );
    }
  } catch (error) {
    console.log("Error handling payment intent succeeded:", error);
    throw error;
  }
}
