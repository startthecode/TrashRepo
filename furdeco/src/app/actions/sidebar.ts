"use server";
import { menuService } from "../services/menuServices";

export const getMenus = async () => {
  const response = await menuService.getMenus_client();
  try {
    return response;
  } catch (err: any) {
    console.log(err, "---");
    if (!err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw err; // let Next.js handle the redirect
    }
  }
};
