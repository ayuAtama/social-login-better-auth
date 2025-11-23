"use client";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  return (
    <div>
      <h1>Homepage</h1>

      {isPending && <p>Loading…</p>}
      {error && <p>Error: {error.message}</p>}

      {session?.user ? (
        <div>
          <p>Logged in as {session.user.email}</p>
          <form action="/api/logout" method="post">
            <button type="submit">Logout</button>
          </form>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
}
