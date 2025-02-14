import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { envSchema } from "./lib/env";

const env: envSchema = {
  GMAIL_API_KEY: process.env.GMAIL_API_KEY ?? "",
  AUTH_SECRET: process.env.AUTH_SECRET ?? "",
  AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET ?? "",
  AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID ?? "",
};

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    token?: any;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 86400, // 24 hours in seconds
  },
  providers: [
    Google({
      clientId: env.AUTH_CLIENT_ID,
      clientSecret: env.AUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async authorized({ auth }) {
      return !!auth;
    },
    async signIn({ profile }) {
      return profile?.email?.endsWith("@gmail.com") ?? false;
    },
    async jwt({ account, profile, token }) {
      if (account) {
        token.accessToken = account.access_token;
        token.email = profile?.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.token = token;
      return session;
    },
  },
});
