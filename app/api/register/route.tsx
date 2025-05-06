import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "prisma/client"; // Import the Prisma client instance to interact with the database
import bcrypt from "bcrypt"; // Import bcrypt for password hashing


const schema = z.object({
    userName: z.string().min(3).max(20), // Validate that userName is a string between 3 and 20 characters
    email: z.string().email(),
    password: z.string().min(5)
});


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body); // Validate the request body against the schema. safeParse returns an object with success and error properties.
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 }); // Return a 400 Bad Request response with validation errors
    }
    const user = await prisma.user.findUnique(
        {
            where: {
                email: body.email,
            },
        }
    ); // Check if a user with the provided email already exists in the database
    
    if (user) 
        return NextResponse.json(
            {messag: "User already exists"}, 
            { status: 400 }
        ); // Return a 400 Bad Request response if the user already exists})
    const hashedPassword = await bcrypt.hash(body.password, 10); // Hash the password using bcrypt with a salt rounds of 10
    const newUser = await prisma.user.create({ // Create a new user in the database with the provided email and hashed password
        data: {
            userName: body.userName,
            password: hashedPassword,
        },
    });
    return NextResponse.json(newUser.email, { status: 201 }); // Return a 201 Created response with the new user object 
}
