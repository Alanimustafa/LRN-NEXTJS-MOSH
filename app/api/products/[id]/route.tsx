import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client"; // adjust if needed

// GET product by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // 👈 mark params as Promise
) {
  const { id } = await context.params; // 👈 await the params
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const product = await prisma.product.findUnique({
    where: { id: numericId },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}

// PUT (update) product
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numericId = Number(id);
  const body = await request.json();
  const validation = schema.safeParse(body);
  const product = await prisma.product.findUnique ({
    where: { id: numericId }
  })

  if (isNaN(numericId) || numericId < 1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  if (!product) {
    return NextResponse.json({ error: "Product Not Found"}, { status:400 })
  }

  const updatedProduct = await prisma.product.update({
    where: { id : numericId},
    data: {
      name: body.name,
      description: body.description,
      price: body.price
    }
  })

  return NextResponse.json(updatedProduct, { status: 200 });
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numericId = Number(id);
  
  if (isNaN(numericId) || numericId < 1 ) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const validation = schema.safeParse({ id: numericId });
  if (!validation) {
    return NextResponse.json({ error: "Product Not Found - Bad Request"}, { status: 400 });
  }

  const product = await prisma.product.findUnique({
    where: {
      id: numericId
    }
  })
  if (!product) {
    return NextResponse.json({error: " Product Not Found"}, { status: 400})
  }
  
  const deletedProduct = await prisma.product.delete({
    where: {
      id: numericId
    }
  })
  // Example delete logic (if needed)
  // await prisma.product.delete({ where: { id: numericId } });

  return NextResponse.json(
    { message: `${deletedProduct.name} product has been deleted` },
    { status: 200 }
  );
}
