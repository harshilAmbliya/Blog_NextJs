import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismadb";
import bcrypt from "bcryptjs";

interface Credentials {
  email: string | undefined;
  password: string | undefined;
}

// interface Token {
//   id: string | undefined;
//   email: string | undefined;
//   name: string | undefined;
//   role: string | undefined;
//   image: string | undefined;
// }

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
      authorize: async (credentials: Credentials) => {
        const email = credentials.email;
        const password = credentials.password;
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
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.SECRET!,
  callbacks: {
    async jwt({ user, token, account, profile }) {
      if (account) {
        token.name = user.name
        token.id = user.id;
        token.email = user?.email;
        console.log("token", token);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name
        session.user.id = token.id as string;
        session.user.email = token.email;
        console.log("session", session);
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
