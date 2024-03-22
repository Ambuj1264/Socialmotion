export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/dashboard", "/buy", "/buynow/:id", "/paymentsuccess","/paymentunsuccess","/product", "demoDetails/:id"],
};
