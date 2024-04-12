
export { default } from "next-auth/middleware";


export const config = {
  matcher: [ "/buy", "/buynow/:path*", "/paymentsuccess","/paymentunsuccess", ],
};