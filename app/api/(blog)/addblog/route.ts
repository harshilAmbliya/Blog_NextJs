// import prisma from "@/prisma/prismadb";
// import { NextRequest, NextResponse } from "next/server";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../(auth)/auth/[...nextauth]/route";
// // import session from
// type BlogType = {
//     title: string
//     description: string
//     image: string
//     slug: string
//     userid: string
// }
// export const POST = async (req: NextRequest, res: NextResponse) => {

export const GET = async () => {

    //     try {
    //         await prisma.$connect()
    const session: Session | null = await getServerSession(authOptions)
    console.log(session)
    console.log(session?.user?.email)
    //         const Userdatacredentials: BlogType = await req.json();
    //         const { title, description, image, slug } = Userdatacredentials;
    //         const Blog: BlogType = await prisma.post.create({
    //             data: {
    //                 title, description, image, slug, userId
    //             }
    //         })
    //         // const user: BlogType = await prisma.user.create({
    //         //     data: {
    //         //         username,
    //         //         password,
    //         //         email,
    //         //     }
    //         // })

    //         return NextResponse.json({ data: user }, { status: 200 });
    //     } catch (error) {
    //         console.error("Error creating user:", error);
    //         return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    //     }
    //     finally {
    //         await prisma.$disconnect()
    //     }


}