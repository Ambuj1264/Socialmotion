
export { default } from "next-auth/middleware";


export const config = {
  matcher: [ "/buy", "/buynow/:id", "/paymentsuccess","/paymentunsuccess", ],
};