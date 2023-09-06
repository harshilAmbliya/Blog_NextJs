import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";
type UserType = {
    username: string
    password: string
    email: string
}
export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        await prisma.$connect()
        const Userdatacredentials: UserType = await req.json();
        const { username, password, email } = Userdatacredentials;

        const user: UserType = await prisma.user.create({
            data: {
                username,
                password,
                email,
            }
        })

        return NextResponse.json({ data: user }, { status: 200 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
    finally {
        await prisma.$disconnect()
    }


}