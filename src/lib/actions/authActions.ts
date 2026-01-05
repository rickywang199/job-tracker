"use server";

import { signIn, signOut } from "@/auth";

export async function login() {
  await signIn("github", { callbackUrl: "/" });
}

export async function logout() {
  await signOut({ callbackUrl: "/" });
}
