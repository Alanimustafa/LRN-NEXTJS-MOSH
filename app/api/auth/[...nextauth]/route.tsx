import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Import PrismaAdapter to use Prisma with NextAuth
import { PrismaClient } from "@prisma/client"; // Import PrismaClient to interact with the database
import { NextAuthOptions } from "next-auth"; // Import NextAuthOptions type for TypeScript support
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing and comparison
import { prisma } from "prisma/client";


export const authOptions : NextAuthOptions = { // Define the authentication options for NextAuth

    adapter: PrismaAdapter(new PrismaClient()), // Use PrismaAdapter with a new instance of PrismaClient to connect to the database
    
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: { label: "Email", type: "email", placeholder: "Email" },
                    password: { label: "Password", type: "password", placeholder: "Password" },
                },
                async authorize(credentials) {
                    if (!credentials?.email || !credentials?.password) {
                        return null; // Return null if email or password is not provided
                    }
                    const user = await prisma.user.findUnique({
                        where: {email: credentials.email}} // Find the user in the database by email
                    );
                    if (!user) {
                        return null; // Return null if user is not found
                    }
                    const passowrdMatch = await bcrypt.compare(credentials.password, user.password!); // Compare the provided password with the hashed password in the database
                    if (!passowrdMatch) {
                        return null; // Return null if password does not match
                    }
                    return user; // Return the user object if authentication is successful
                },
}),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID!, // The explanation for the exclamation mark is that we are sure that this environment variable is set. If it is not, the application will crash at runtime.
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            }),
            // Add other providers here if needed
        ], // Add your authentication providers here
        // Add any other NextAuth configuration options here
        session: {
            strategy: "jwt", // Use JWT for session management
        },
        
    }

const handler = NextAuth(authOptions); // Create the NextAuth handler with the specified options.

    export { handler as GET, handler as POST }; // Export the handler for both GET and POST requests.