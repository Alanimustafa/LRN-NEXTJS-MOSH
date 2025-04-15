import { NextRequest, NextResponse } from "next/server";
import productSchema from "../users/schema";
import { prisma } from "../../../prisma/client"; // or relative path


export async function GET(request: NextRequest,) {
  const products = await prisma.product.findMany(); // Fetch products from the database
  return NextResponse.json(products, { status: 200 }); // Return the products as JSON response
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body); // validate the request body
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
    const { name, price, description, category, email, url} = body;  
  return NextResponse.json(
    { id: 1, name, price, description, category, email, url },
    { status: 201 }
  );
}