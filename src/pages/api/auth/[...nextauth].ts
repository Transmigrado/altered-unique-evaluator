import NextAuth from "next-auth"
import type { AuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { firebaseAdmin } from "@/lib/firebaseAdmin"

interface FirebaseUser {
  uid: string;
  email?: string;
  name?: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        idToken: { label: "ID Token", type: "text" },
      },
      authorize: async (
        credentials: { idToken: string } | undefined): Promise<User | null>  => {
          console.log('credentials', credentials)
          if (credentials?.idToken) {
            try {
              const decoded: FirebaseUser = await firebaseAdmin.auth().verifyIdToken(credentials.idToken);
              
              return {
                id: decoded.uid, 
                email: decoded.email, 
                name: decoded.name
              };
            } catch (err) {
              console.error("Error verifying ID token:", err);
            }
          }
          return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET,
  },
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    jwt: async (data) => {
      const { user, token} = data
      if (user) {
        token.uid = user.id; 
        token.email = user.email; 
        token.name = user.name
      }
      console.log('token', data)
      return token
    },
    session: async ({ session, token }) => {
      console.log('token', token)
      console.log('session', session)

      //session.user.id = token.id;
      return session;
    },
  },
  events: {},
  debug: process.env.NODE_ENV !== "production",
}

export default NextAuth(authOptions)