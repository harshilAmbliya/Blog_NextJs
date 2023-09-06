import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(auth)/auth/[...nextauth]/route";
import next from "next";
type BlogType = {
    description: string
    image: string
    slug: string
    title: string

}
export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        await prisma.$connect();
        const session: Session | null = await getServerSession(authOptions)
        // console.log(session?.user.id);
        console.log(session?.user.email)
        const user = await prisma.user.findUnique({
            where: {
                email: session?.user.email
            }
        })
        const userId: string | any = user?.id

        console.log(user?.id)

        const { description, image, slug, title }: BlogType = await req.json();
        const blog: BlogType = await prisma.blog.create({
            data: {
                description,
                image,
                slug, title, userId
            }
        })

        return NextResponse.json({ blog: blog }, { status: 201 })
    } catch (error) {
        console.log("Error creating blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
    finally {
        await prisma.$disconnect()
    }


}