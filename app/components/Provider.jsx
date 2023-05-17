// "use client";

// import { SessionProvider } from "next-auth/react";

// export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

"use client";

import { SessionProvider } from "next-auth/react";

const ProviderWrapper = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default ProviderWrapper;
