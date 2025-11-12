import { fetchForServer, fetchForClient } from "../config/axios";

export const menuService = {
  getMenus_client: () =>
    fetchForClient({ url: "/api/Master/GetMenuMasterList" }),
  getMenus_server: () =>
    fetchForServer({ url: "/api/Master/GetMenuMasterList" }),
};
