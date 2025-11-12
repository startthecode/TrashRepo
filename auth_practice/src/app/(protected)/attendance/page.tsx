import Sidebar from "@/app/components/layout/sidebar/Sidebar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Sidebar />
      <Link href={"/home"}>attendace</Link>
    </div>
  );
};

export default page;
