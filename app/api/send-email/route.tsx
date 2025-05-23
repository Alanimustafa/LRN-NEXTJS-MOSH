import WelcomeTamplate from "emails/WelcomeTamplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
    await resend.emails.send({
        from: "...",
        to: "mustafaalani.se@gmail.com",
        subject: "Welcome to Scorpion",
        react: <WelcomeTamplate name="Mustafa"/>,
    })
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
}