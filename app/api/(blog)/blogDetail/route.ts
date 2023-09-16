import prisma from "@/prisma/prismadb"
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        await prisma.$connect();
        const data = await req.json();
        console.log(data)
        // const blog = await prisma.blog.findUnique({
        //     where: {
        //         id
        //     }
        // })
        // console.log(blog)
        // if (!blog) {
        //     return NextResponse.json({ message: "blog was not found!" }, { status: 404 })
        // }
        // return blog
    } catch (error) {
        console.log(error)
    }
    finally {
        await prisma.$disconnect()
    }
}