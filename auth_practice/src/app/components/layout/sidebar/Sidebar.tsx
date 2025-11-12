import React, { Suspense } from "react";
import "@/app/css/sidebar.css";
import Menus from "./Menus";
import { url } from "inspector";
import { menuService } from "@/app/services/menuServices";

const Sidebar = async () => {
  return (
    <div className="h-screen max-w-[300px] flex flex-col sideBar p-4">
      <div className="h-[50px]">
        <img
          src="/images/logo_lg.png"
          alt="logo"
          className="max-w-[200px] object-contain"
        />
      </div>
      <div className="divider"></div>
      <div
        className="h-full overflow-y-auto
      "
      >
          <Menus />
      </div>
    </div>
  );
};

export default Sidebar;

// "use client";
// import React, { useEffect, useState } from "react";
// import "@/app/css/sidebar.css";
// import Menus from "./Menus";
// import { fetchAtClient } from "@/app/config/axiosClient";
// import { menuService } from "@/app/services/menuServices";

// const Sidebar = () => {
//   let [data, setData] = useState<any>();

//   useEffect(() => {
//     async function name() {
//       let datas = (await menuService.getMenus_client())
//         ?.data;
//       console.log(datas);
//       setData(datas);
//     }
//     name();
//     return () => {};
//   }, []);

//   return (
//     <div className="h-screen max-w-[300px] flex flex-col sideBar p-4">
//       <div className="h-[50px]">
//         <img
//           src="/images/logo_lg.png"
//           alt="logo"
//           className="max-w-[200px] object-contain"
//         />
//       </div>
//       <div className="divider"></div>
//       <div
//         className="h-full overflow-y-auto
//       "
//       >
//         <Menus menu={data} />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
