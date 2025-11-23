import "dotenv/config";
import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
// If your Prisma file is located elsewhere, you can change the path (from config)

export const auth = betterAuth({
  // connect to database orm
  database: new Database("./sqlite.db"),

  // add your social providers
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID! as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET! as string,
      redirectURI: "http://localhost:3000/api/auth/callback/github",
    },
  }, //cors error fix
  trustedOrigins: ["http://localhost:3001"],
});
console.log("Uwu Desuwa~");
