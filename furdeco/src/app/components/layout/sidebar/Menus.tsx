"use client";

import { LeftMenu } from "@/app/types/menu";
import Icon from "../../UI/Icon";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { getMenus } from "@/app/actions/sidebar";

const Menus = () => {
  let [open, setOpen] = useState<Record<string, boolean>>({});
  let [menu, setMenu] = useState<LeftMenu[]>([]);
  let [loading, setLoading] = useState(false);
  function handleClick(keyName: string) {
    return () => setOpen({ [keyName]: !open[keyName] });
  }

  useEffect(() => {
    async function getm() {
      setLoading(true);
      try {
        let data = await getMenus();
        setMenu(data?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getm();
    return () => {};
  }, []);
  function RenderMenus(arr: LeftMenu[] | undefined) {
    if (!arr) return [];
    return arr.map((val) => {
      if (val.submenuDetails?.length > 0) {
        return (
          <React.Fragment key={val.id}>
            <div className="group hasChild">
              <div
                onClick={handleClick(val.name)}
                className={`flex items-center w-full sideBarMenu_item !mb-3 ${
                  open[val.name] ? "active" : ""
                }`}
              >
                <div className="w-full flex items-center gap-4">
                  <Icon
                    className=""
                    name={
                      getIconForItem(val.name) ||
                      val.iconClass?.replaceAll("heroicons_outline:", "")
                    }
                  />
                  {val.name}
                </div>
                <Icon
                  className=" group-data-open:rotate-90 ease-linear transition-all origin-center"
                  name="arrow_right"
                />
              </div>
              <div
                className={`text-gray-500 overflow-hidden ease-linear ps-2 ${
                  !open[val.name] ? "h-0" : ""
                }`}
              >
                {...RenderMenus(val.submenuDetails)}
              </div>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <Link
            href={val.nevigateUrl || ""}
            key={val.id}
            className="flex w-full sideBarMenu_item"
          >
            <Icon
              className="mr-4"
              name={
                getIconForItem(val.name) ||
                val.iconClass?.replaceAll("heroicons_outline", "")
              }
            />
            {val.name}
          </Link>
        );
      }
    });
  }

  function getIconForItem(name: string): string | null {
    switch (name) {
      case "Home":
        return "home";
      case "Attendance":
        return "calendar";
      case "Time Off":
        return "clock_checkin";
      default:
        return null; // fallback icon
    }
  }
  if (!menu) return null;
  if (loading) return "...loading";
  return RenderMenus(menu);
};

export default Menus;
