import prisma from "@/prisma/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../(auth)/auth/[...nextauth]/route";
export const GET = async (res: NextResponse) => {
    try {
        await prisma.$connect()
        const sessiondata = await getServerSession(authOptions)

        return NextResponse.json({ session: sessiondata }, { status: 200 })

    } catch (error) {
        await prisma.$disconnect()
        console.log("session not find");
        return NextResponse.json({ message: "session not found" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }

}