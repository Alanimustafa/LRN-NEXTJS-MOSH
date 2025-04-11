import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } } // destructure `context` instead of `params` directly
) {
  const { params } = context;
  const id = Number(params.id); // safely convert string to number

  if (isNaN(id) || id < 1 || id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
    { id: 6, name: "Diana Evans" },
    { id: 7, name: "Ethan Foster" },
    { id: 8, name: "Fiona Green" },
    { id: 9, name: "George Harris" },
    { id: 10, name: "Hannah Ivers" },
  ];

  const user = await users.find((user) => user.id === id);
  return NextResponse.json(user, { status: 200 });
}
