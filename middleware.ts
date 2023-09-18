import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { CustomUser } from './app/api/(auth)/auth/[...nextauth]/route'


export async function middleware (request: NextRequest)  {
    const { pathname } = request.nextUrl

    if (pathname === "/login") {
        return NextResponse.next()
    }

    const token = await getToken({ req: request })
    const userRoutes = ["/"];
    const adminRoute = ["/dashboard"];
    console.log("middleware token =>", token)
    if (token === null && (userRoutes.includes(pathname)) || (adminRoute.includes(pathname))) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    const user: CustomUser | null = token?.user as CustomUser

    if (user?.role === "User" && adminRoute.includes(pathname)) {
        return NextResponse.redirect(new URL("/admin/login?Login to check the page", request.url));
    }


    if (user?.role === "Admin" && userRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/login?Login to check the page", request.url));
    }


}


