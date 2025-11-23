// // // app/login/page.tsx
// // "use client";

// // import { authClient } from "@/lib/auth-client";

// // export default function LoginPage() {
// //   const loginWithGithub = () => {
// //     authClient.signIn.social({
// //       provider: "github",
// //       callbackURL: "/",
// //       errorCallbackURL: "/error",
// //       newUserCallbackURL: "/new-user",
// //     });
// //   };

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <button onClick={loginWithGithub}>Login with GitHub</button>
// //     </div>
// //   );
// // }

// "use client";

// import { authClient } from "@/lib/auth-client";

// export default async function LoginPage() {
//   const loginWithGithub = async () => {
//     await authClient.signIn.social({
//       provider: "github",
//     });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={loginWithGithub}>Login with GitHub</button>
//       <button
//         className="w-full gap-2 flex items-center"
//         onClick={() => {
//           authClient.signIn.social({
//             provider: "github",
//             callbackURL: "/dashboard",
//           });
//         }}
//       >
//         <span>Sign in with GitHub</span>
//       </button>
//     </div>
//   );
// }

"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const loginGithub = () => {
    authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:3001/dashboard", // MUST USE redirectTo (not callbackURL)
      errorCallbackURL: "http://localhost:3001/error",
      newUserCallbackURL: "http://localhost:3001/new-user",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginGithub}>Login with GitHub</button>
    </div>
  );
}
