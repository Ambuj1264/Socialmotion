
export { default } from "next-auth/middleware";


export const config = {
  matcher: [ "/buy", "/buynow/**", "/paymentsuccess","/paymentunsuccess", ],
};