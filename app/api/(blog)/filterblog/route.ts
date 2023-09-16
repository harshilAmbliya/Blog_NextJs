import prisma from "@/prisma/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {

    await prisma.$connect()
    const { slug } = req.query;

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                slug: slug as string,
            },
        });

        if (!blog) {
            throw new Error("Blog not found")
        }

        return NextResponse.json(blog, { status: 200 })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
};






