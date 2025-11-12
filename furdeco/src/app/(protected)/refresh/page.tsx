"use client";

import { refrehToken } from "@/app/actions/auth";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [loading, setloading] = useState<boolean>();
  const param = useSearchParams();
  let returnURL = param.get("redirected") || "/home";
  useEffect(() => {
    async function init() {
      setloading(true);
      let refreshSession = await refrehToken();
      setloading(false);
      console.log(refreshSession, "-------");
      if (refreshSession) {
        redirect(returnURL);
      } else {
        redirect("/signin");
      }
    }
    init();
  }, []);

  return loading ? <div>......loading</div> : "null";
};

export default page;
