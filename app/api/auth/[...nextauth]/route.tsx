import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Import PrismaAdapter to use Prisma with NextAuth
import { PrismaClient } from "@prisma/client"; // Import PrismaClient to interact with the database

export const authOptions = {
    adapter: PrismaAdapter(new PrismaClient()), // Use PrismaAdapter with a new instance of PrismaClient to connect to the database
    
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID!, // The explanation for the exclamation mark is that we are sure that this environment variable is set. If it is not, the application will crash at runtime.
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            }),
            // Add other providers here if needed
        ], // Add your authentication providers here
        // Add any other NextAuth configuration options here
        }

const handler = NextAuth(authOptions); // Create the NextAuth handler with the specified options.

    export { handler as GET, handler as POST }; // Export the handler for both GET and POST requests.