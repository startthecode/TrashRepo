import { Metadata } from "next";
import React from "react";
import NavLink from "../components/NavLink";

export const metadata: Metadata = {
  title: {
    absolute: "123",
    template: `%s | working`,
  },
  description: "123",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavLink />
      {children}
      Protected footer
    </div>
  );
};

export default layout;
