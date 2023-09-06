import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        await prisma.$connect()
        const allUsers = await prisma.user.findMany()
        return NextResponse.json({ allUser: allUsers }, { status: 200 });
    } catch (error) {
        await prisma.$disconnect()
        console.log("users not found!")
        return NextResponse.json({ message: "can't find all users" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}