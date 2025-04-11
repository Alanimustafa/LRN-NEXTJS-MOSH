import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { NextApiRequest } from "next";

export async function GET(
    request: NextRequest,
    context: { params: { id: string } } // destructure `context` instead of `params` directly
) {
    const { params } = context;
    const id = Number(params.id); // safely convert string to number

    const validation = schema.safeParse(request); // validate the request body
    if (!validation.success) {
        return NextResponse.json(validation.error.errors); // handle validation error
    }
    if (isNaN(id) || id < 1 || id > 10) {
        return <div>User not found</div>;
    }
    
    return <div>GET</div>;
}

export async function PUT(
    request: Request,
    context: { params: { id: string } } // destructure `context` instead of `params` directly
    ) {
    const { params } = context;
    const id = Number(params.id); // safely convert string to number
    const validation = schema.safeParse(request); // validate the request body
    if (!validation.success) {
        return <div>Invalid request</div>; // handle validation error
    }
    if (isNaN(id) || id < 1 || id > 10) {
        return <div>User not found</div>;
    }
    
    return <div>PUT</div>;
    }

    export function DELETE(
        request: Request,
        context: { params: { id: string } }
    ) {
        const { params } = context;
        const id = Number(params.id); // safely convert string to number
        const validation = schema.safeParse(request); // validate the request body
        if (!validation.success) {
            return <div>Invalid request</div>; // handle validation error
        }
        if (isNaN(id) || id < 1 || id > 10) {
            return <div>User not found</div>;
        }
        
        return <div>DELETE</div>;
    }
