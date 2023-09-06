import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismadb";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

interface Request {
    login: Promise<Credentials>;
}

interface Credentials {
    username: string;
    password: string;
}

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    
    providers: [
        // GoogleProvider({
        //     clientId: process.env.CLIENT_ID!,
        //     clientSecret: process.env.CLIENT_SECRET!,
        // }),
        CredentialsProvider({
            name: "login",
            // async authorize(request:Request) {
            //     console.log(request.login)
            //     const credentials:Credentials = await request.login
            //     return credentials
            // }
            authorize: async (req: Request) => {
                const email = await req.email
                const password = await req.password
                if (!email || !password) {
                    throw new Error("Missing credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })
                if (!user) {
                    console.log("user not found")
                    throw new Error("Invalid Email or Password")
                }
                const hashedPassword = await bcrypt.compare(password, user.password)
                if (password !== hashedPassword) {
                    console.log("invalid password")
                  throw new Error("invalid Password")
                }

                console.log("valid user",user.username)
                console.log(user)
                return user
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.SECRET!,


};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
