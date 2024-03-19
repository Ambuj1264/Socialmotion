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
export async function POST(req: any) {
  const rawBody = await req.json();
  const sig =  req?.headers["stripe-signature"];
  try {
    const event = await stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        break;
      case "checkout.session.async_payment_succeeded":
        break;
      case "checkout.session.completed":
        const session: Session = event.data.object as Session;
        stripe.customers.retrieve(session.customer).then(async (customerResponse) => {
          const customer = customerResponse as Stripe.Customer;
          const customerId = customer.metadata.userId;
          const billingDate = session.created;
          const formattedBillingDate = new Date(billingDate * 1000).toISOString();
          const inputDate = new Date(formattedBillingDate);
          const findUser = await Subscribes.findOne({
            userId: customerId,
          });
          if (!findUser) {
            const updateUserPayment = await Subscribes.create({
              userId: customerId,
              billingDate: inputDate,
              paid: true,
              approved: true,
              amount: session.amount_total / 100,
            });
            await updateUserPayment.save();
            if (updateUserPayment) {
              await Users.findOneAndUpdate(
                {
                  _id: customerId,
                },
                {
                  subscribed: true,
                  approved: true,
                }
              );
            }
          } else {
            const updatedSub = await Subscribes.findOneAndUpdate(
              {
                userId: customerId,
              },
              {
                userId: customerId,
                billingDate: inputDate,
                paid: true,
                approved: true,
                amount: session.amount_total / 100,
              }
            );
            if (updatedSub) {
              await Users.findOneAndUpdate(
                {
                  _id: customerId,
                },
                {
                  subscribed: true,
                  approved: true,
                }
              );
            }
          }
        });


        // Then define and call a function to handle the event checkout.session.completed
        break;
      case "checkout.session.expired":
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
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
