import NextAuth, { AuthOptions, ISODateString } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismadb";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";


interface Credentials {
  email: string | undefined;
  password: string | undefined;
}

export interface CustomUser {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  image?: string | null;
}
export interface CustomSession {
  user?: CustomUser;
  expiresDate?: ISODateString
}

// interface User extends Token {
//   password: string | undefined;
// }

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    // GoogleProvider({
    //     clientId: process.env.CLIENT_ID!,
    //     clientSecret: process.env.CLIENT_SECRET!,
    // }),
    CredentialsProvider({
      name: "login",
      authorize: async (credentials: Credentials | null) => {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
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
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login"
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.SECRET!,
  callbacks: {
    async jwt({ token, user }: {
      token: JWT;
      user: CustomUser | null;
    }) {
      if (user) {
        user.role = user?.role ?? "user"
        token.user = user;
      }
      // console.log(token)
      return token;
    },
    async session({ session, token }: { session: CustomSession; token: JWT }) {
      if (token) {
        session.user = token.user as CustomUser

      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
