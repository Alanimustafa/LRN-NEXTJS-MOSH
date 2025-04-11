import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export const Products = [
    {
      id: 1,
      name: "Milk",
      price: 2.5,
      description: "Fresh milk from local farms",
    },
    {
      id: 2,
      name: "Bread",
      price: 1.5,
      description: "Whole grain bread",
    },
    {
      id: 3,
      name: "Eggs",
      price: 3.0,
      description: "Organic free-range eggs",
    },
    {
      id: 4,
      name: "Butter",
      price: 2.0,
      description: "Creamy butter from grass-fed cows",
    },
    {
      id: 5,
      name: "Cheese",
      price: 4.0,
      description: "Aged cheddar cheese",
    },
  ]

export async function GET(request: NextRequest,) {
  return NextResponse.json(Products)}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body); // validate the request body
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
    const { name, price, description, category } = body;  
  return NextResponse.json(
    { id: 1, name, price, description, category },
    { status: 201 }
  );
}