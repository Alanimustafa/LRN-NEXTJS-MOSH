import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [], // Add your authentication providers here
    // Add any other NextAuth configuration options here
    });

    export { handler as GET, handler as POST }; // Export the handler for both GET and POST requests.