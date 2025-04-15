import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client"; // adjust the import path as necessary

export async function GET(
  request: NextRequest,
  context: { params: { id: string } } // destructure `context` instead of `params` directly
) {
  const { params } = context;
  const id = Number(params.id); // safely convert string to number
  const user = await prisma.user.findUnique({
    where: { id: id }
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  if (isNaN(id) || id < 1 || id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = Number(params.id); // safely convert string to number

  if (isNaN(id) || id < 1 || id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const body = await request.json();
  const validation = schema.safeParse(body); // validate the request body
  if (!validation.success) {
    return NextResponse.json( validation.error.errors , { status: 400 });
  }

  return NextResponse.json({ id, name: body.name }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = Number(params.id); // safely convert string to number

  if (isNaN(id) || id < 1 || id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
