import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";

// GET user by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 1 || numericId > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const user = await prisma.user.findUnique({
    where: { id: numericId }
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

// PUT (update) user
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numericId = Number(id);


  if (isNaN(numericId) || numericId < 1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: numericId }
  })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // Example update logic
  const updatedUser = await prisma.user.update({
    where: { id: numericId },
    data: { 
      name: body.name, 
      email: body.email, 
    }
  })
  
  
  return NextResponse.json(updatedUser, { status: 200 });
}

// DELETE user
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 1 ) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const validation = schema.safeParse({ id: numericId});
  if (!validation) {
    return NextResponse.json({error: "User Not Found - Bad Request"}, { status: 400})
  }
  const deletedUser = await prisma.user.delete({
    where: { id: numericId }
  });
  // Example delete logic
  // await prisma.user.delete({ where: { id: numericId } });

  return NextResponse.json({ message: `User ${deletedUser.name} has been deleted` }, { status: 200 });
}
