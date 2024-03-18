import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: NextRequest) {
  const input = await req.json();
  try {
    const { userId } = input;
    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "Please provide userId",
        data: [],
      });
    }
    const customer = await stripe.customers.create({
      metadata: {
        userId: userId,
      },
    });
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1OpZdvGQpQXdlvpzzwrhzi7V",
          quantity: 1,
        },
      ],
      mode: "payment",
      customer: customer?.id,
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    });

    if (!session.url) {
      return NextResponse.json({
        success: false,
        message: "Payment failed",
        data: [],
      });
    }
    return NextResponse.json({
      success: true,
      message: "Payment checkout",
      data: session.url,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
