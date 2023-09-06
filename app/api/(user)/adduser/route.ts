import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    type data = {
        username:string
    }
    const data = req.json();
    const{username,password} =data;
    const user = await prisma.user.create({
        data:{
            username,password
        }
    })
    return NextResponse.json({ data: user }, { status: 200 });
}