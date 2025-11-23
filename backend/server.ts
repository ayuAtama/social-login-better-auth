import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth";

//cors error fix
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8000;

// Enable CORS for Next.js frontend
app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth));

// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth
app.use(express.json());

app.listen(port, () => {
  console.log(`Better Auth app listening on port ${port}`);
});
