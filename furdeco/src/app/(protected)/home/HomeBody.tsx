import React from "react";
import styles from "./style.module.css";
import { environment } from "@/app/const/environment";
interface Props {
  data: any;
}
const HomeBody: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile_block}>
        <div className=" w-full pb-5">
          <div className="mt-[-50px] ">
            <img
              className="w-[40%] aspect-[1/0.9] rounded-3xl object-cover block  mx-auto"
              src={`${environment.serverURL}images/${data?.repManProfileImg}`}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-md font-light my-2 text-center">
              {data.employeeCode}
            </h2>
            -
            <h1 className="text-lg font-semibold my-2 text-center">
              {data?.repManName}
            </h1>
          </div>
          <p className="text-center text-red-500">Check Out</p>
          <div></div>
        </div>
      </div>
      <div className={styles.detail_block}>
        <div className="flex gap-5 items-center px-4 h-full">
          <div className="basis-3/12">
            <img src="/images/logo_lg.png" alt="" />
          </div>
          <div className="basis-9/12">
            <img src="/images/logo_lg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
