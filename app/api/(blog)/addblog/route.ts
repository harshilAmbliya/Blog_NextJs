// import prisma from "@/prisma/prismadb";
// import { NextRequest, NextResponse } from "next/server";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../(auth)/auth/[...nextauth]/route";
import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await prisma.$connect();
    const session: Session | null = await getServerSession(authOptions);
    const userId =  session?.user.id as string;
    const Userdatacredentials = await req.json();
    console.log(Userdatacredentials)
    const { title, description, image, slug } = await Userdatacredentials;
    const Blog = await prisma.blog.create({
      data: {
        title,
        description,
        image,
        slug,
        userId,
      },
    });

    return NextResponse.json({ data: Blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
