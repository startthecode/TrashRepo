// app/protected/layout.tsx
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>🔐 Protected Header</header>
      <aside>Sidebar Navigation</aside>
      <main>{children}</main>
    </div>
  );
}
