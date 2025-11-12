// app/protected/layout.tsx
import React from "react";
import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/layout/sidebar/Sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
  refff: React.ReactNode;
}) {
  return (
    <AppLayout>
      <AppLayout.Sidebar>
        <Sidebar />
      </AppLayout.Sidebar>
      <AppLayout.Content>{children}</AppLayout.Content>
    </AppLayout>
  );
}
