"use server";
import crypto from "crypto";
import { cookies } from "next/headers";

const csrfToken = crypto.randomBytes(32).toString("hex");

// To handle get and set cookies
export const setAuthCookies = async (data: any) => {
  cookies().set('accessToken', data.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 10,
    priority: "medium",
    path: "/",
  })
  
  cookies().set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    priority: "medium",
    path: "/",
  })

  cookies().set("csrfToken", csrfToken, {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 10,
    priority: "medium",
    path: "/",
  });
};

export const getAuthCookies = async () => {
  const accessToken = cookies().get('accessToken')?.value ?? null;
  const refreshToken = cookies().get('refreshToken')?.value ?? null;
  const csrfToken = cookies().get('csrfToken')?.value ?? null;

  return { accessToken, refreshToken, csrfToken };
};

