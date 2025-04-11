import { NextResponse } from "next/server";

export function GET(request: Request) {
    return NextResponse.json([
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
    ]);
}

export async function POST(request: Request) {
    const body = await request.json();
    if (!body.name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    return NextResponse.json({id: 1, name: body.name}, { status: 201 });
}