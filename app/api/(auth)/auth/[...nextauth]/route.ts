import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismadb";
import bcrypt from 'bcryptjs'




interface Credentials {
    email: string | undefined;
    password: string | undefined;
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
            authorize: async (credentials: Credentials) => {
                const email = credentials.email;
                const password = credentials.password;
                if (!email || !password) {
                    throw new Error("Missing credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                });
                if (!user) {
                    console.log("user not found");
                    throw new Error("Invalid Email or Password");
                }
                const hashedPassword = await bcrypt.compare(password, user.password);
                if (!hashedPassword) {
                    console.log("invalid password");
                    throw new Error("invalid Password");
                }

                console.log("valid user", user.username);
                console.log(user);
                return user;
            },
            undefined
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.SECRET!,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.Id = user.id
                token.email = user.email
            }
            return token
        },
        async session({ session, token,user }) {
            if (token) {
                
                session.user.id = user.id
                session.user.email = token.email
            }
           console.log("sessions",session)
            return session
        }
    }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
