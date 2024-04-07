import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/footer/Footer";
import SessionProvider from "@/Hoc/SessionProvider";
import NavBarProvider from "@/components/navbar/NavBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Motion",
  description:
    "Welcome to Social Motion – Your Premier Destination for Social Media Management Solutions Are you ready to elevate your online presence? At Social Motion, we specialize in cutting-edge social media management solutions tailored to suit your unique needs. With a team of experienced professionals dedicated to staying ahead of the curve, we're here to help you navigate the ever-evolving landscape of social media.Why Choose Social Motion? Strategic Planning: We don't believe in a one-size-fits-all approach. Our team works closely with you to develop a customized strategy that aligns with your goals and objectives.  Engaging Content Creation: Content is king in the digital world. From captivating visuals to compelling copy, we craft content that resonates with your audience and drives meaningful engagement.  Community Management: Building and nurturing a thriving online community takes time and dedication. Let us handle the day-to-day interactions, ensuring that your followers feel valued and heard. Data-Driven Insights: We believe in the power of data to inform decision-making. Through comprehensive analytics and reporting, we provide actionable insights to help you continuously optimize your social media strategy. Continuous Support: Our commitment to your success doesn't end once the campaign is live. We're here to provide ongoing support and guidance, helping you adapt to changes in the social media landscape. Whether you're a small business looking to increase brand awareness or a seasoned enterprise seeking to drive conversions, Social Motion has the expertise and resources to help you achieve your objectives.Ready to take your social media presence to the next level? Get in touch with us today to schedule a consultation.",
};
import { Analytics } from "@vercel/analytics/react"
import "aos/dist/aos.css";
import Aosanimation from "@/components/animation/Aosanimation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}  suppressHydrationWarning>
        <SessionProvider>
          <Providers>
          <NavBarProvider />
          <Aosanimation>
            {children}
          </Aosanimation>
            <Footer />
          </Providers>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
