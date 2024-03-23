import  cors  from "cors";
export { default } from "next-auth/middleware";

const corsOptions = {
  origin: 'your-frontend-origin', // Adjust origin as needed
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Adjust methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Adjust headers as needed
};

export const config = {
  matcher: ["/dashboard", "/buy", "/buynow/:id", "/paymentsuccess","/paymentunsuccess","/product", "/demoDetails/:id"],
};

export const corsMiddleware = cors(corsOptions);