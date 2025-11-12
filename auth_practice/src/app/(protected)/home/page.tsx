import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <div>
      <h1>Protected</h1>
      <Link href={"/attendance"}>attendace</Link>
    </div>
  );
};

export default page;
