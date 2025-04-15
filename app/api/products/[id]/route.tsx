import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client"; // or relative path

export async function GET(
    request: NextRequest,
    context: { params: { id: string } }
) {
    // Destructure `context` to get `params`
    const { params } = context;
    // Safely convert string to number
    const id = Number(params.id); // safely convert string to number
    
    const product = await prisma.product.findUnique({
        where: { id: id }
    })

    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    if (isNaN(id) || id < 1 || id > 10) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
}


export async function PUT(
    request: NextRequest,
    context: { params: { id: string } } // destructure `context` instead of `params` directly
    ) {
    const { params } = context;
    const id = Number(params.id); // safely convert string to number
    const body = await request.json(); // parse the request body
    const validation = schema.safeParse(body); // validate the request body
    
    if (isNaN(id) || id < 1 || id > 10) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400}); // handle validation error
    }
    
    return NextResponse.json({ id, name: body.name, price: body.price, description: body.description, category: body.category, email: body.email, url: body.url }, { status: 200 });
    }



    export async function DELETE(
        request: NextRequest,
        context: { params: { id: string } }
      ) {
        const { id } = await context.params; // ✅ await the context.params
        const numericId = Number(id); // ✅ don't await this
      
        const body = await request.json(); // ✅ parse body if needed
        const validation = schema.safeParse(body); // ✅ validate parsed body
      
        if (!validation.success) {
          return NextResponse.json(validation.error.errors, { status: 400 });
        }
      
        if (isNaN(numericId) || numericId < 1 || numericId > 10) {
          return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }
      
        // Fake delete logic
        return NextResponse.json({ message: `${body.name} product has been deleted` }, { status: 200 });
      }
      