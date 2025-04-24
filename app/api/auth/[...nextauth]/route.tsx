import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!, // The explanation for the exclamation mark is that we are sure that this environment variable is set. If it is not, the application will crash at runtime.
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // Add other providers here if needed
    ], // Add your authentication providers here
    // Add any other NextAuth configuration options here
    });

    export { handler as GET, handler as POST }; // Export the handler for both GET and POST requests.