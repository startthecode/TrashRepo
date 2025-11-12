import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import { getDashboardData } from "./actions";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";

const page = async () => {
  let { data: dashData, error } = await getDashboardData();
  console.log(dashData);
  return (
    <div>
      <HomeHeader />
      <HomeBody data={dashData} />
      <Link href={"/attendance"} className="xl:rounded-theme bg-green-900">
        attendaceaa
      </Link>
    </div>
  );
};

export default page;
