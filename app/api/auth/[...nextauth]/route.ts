import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismadb";



export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.SECRET,
    callbacks: {
        async signIn({ profile, user, credentials, account }) {
            console.log("user lloggggggggggggg")
            return true
        }
    }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
