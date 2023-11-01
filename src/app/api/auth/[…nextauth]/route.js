import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
providers: [

GoogleProvider({
clientId: "31017781977-c2mev6djp0jd9dte3hcqal7v8ha2tp27.apps.googleusercontent.com",
clientSecret: "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"
})
],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }