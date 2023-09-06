import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
    const user = await prisma.user.findMany()
    return NextResponse.json({ data: user }, { status: 200 });
}