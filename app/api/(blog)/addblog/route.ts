// import prisma from "@/prisma/prismadb";
// import { NextRequest, NextResponse } from "next/server";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../(auth)/auth/[...nextauth]/route";
import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await prisma.$connect();
    const session: Session | null = await getServerSession(authOptions);
    console.log(session)
    if (!session) {
      redirect('/login')
    }
    // if(session === null){
      
    // }
    const userId =  session?.user.id as string;
    const userDataCredentials = await req.json();
    console.log(userDataCredentials)
    const { title, description, image, slug } = await userDataCredentials;
    const Blog = await prisma.blog.create({
      data: {
        title,
        description,
        image,
        slug,
        userId,
      },
    });

    return NextResponse.json({ data: Blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
