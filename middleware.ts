import middleware from "next-auth/middleware";
// Middleware to handle authentication and authorization for the /users route
export default middleware;

export const config = {
  matcher: [
    "/users/:path*",
    "/products/:path*",
    "/admin/:path*",
    "/photos/:path*",
    "/upload/:path*",
  ], // Apply middleware to these routes
};