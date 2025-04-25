// THis middleware is used to protect certain routes in a Next.js application using NextAuth.js for authentication and authorization.
// It checks if the user is authenticated and authorized to access specific routes, such as /users, /products, /admin, /photos, and /upload.    

export { default } from "next-auth/middleware"; // This imports the default middleware from next-auth
// Middleware to handle authentication and authorization for the /users route

// export default middleware;
// Middleware function to check authentication and authorization

export const config = {
  matcher: [
    "/users/:path*"
  ], // Apply middleware to these routes
};