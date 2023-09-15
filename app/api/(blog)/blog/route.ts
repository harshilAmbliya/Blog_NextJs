import prisma from "@/prisma/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const blog = await prisma.blog.findMany();

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json({ Blogs: blog }, { status: 200 });
};
