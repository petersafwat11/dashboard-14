"use server";

import { revalidatePath } from "next/cache";

export default async function revalidatePage(name) {
  console.log("name", name);
  revalidatePath(`/${name}`, "page");
}
