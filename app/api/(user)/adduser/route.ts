import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
type UserType = {
    username: string
    password: string
    email: string
}
export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        await prisma.$connect()
        const { username, password, email }: UserType = await req.json();
        console.log(username, password, email )
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        const user: UserType = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
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