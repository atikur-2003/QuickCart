// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // You can add more callbacks here for more complex logic
    async signIn({ user, account, profile }) {
      // You can save the user to your database here if needed
      return true; // Allow sign-in
    },
  },
  // If you need to connect to MongoDB, you can use the adapter here
  // adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/login', // Specify the login page
  },
});

export { handler as GET, handler as POST };