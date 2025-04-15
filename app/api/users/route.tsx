import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import { prisma } from "../../../prisma/client"; // or relative path

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })
  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      // We do not need to provide the other properties becasue they have default values in the schema.
      // followers: body.followers,
      // isActive: body.isActive,
      // registeredAt: body.registeredAt,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
