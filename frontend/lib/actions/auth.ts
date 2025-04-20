"use server";

import { setAuthCookies } from "./cookies";
import { signInSchema, signUpSchema } from "../schemas";
import { SIGNIN_ENDPOINT, SIGNUP_ENDPOINT } from "@/constants/api-endpoint";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export const createAccount = async (data: any) => {
    try {
        const dataResponse = await fetch(`${BASE_URL}${SIGNUP_ENDPOINT}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        return dataResponse.json();
    } catch (error: any) {
        console.log("Error:", error.message);
        throw new Error("Fetch Error: " + error.message);
    }
};

export const loginAccount = async (data: any) => {
    try {
        const dataResponse = await fetch(`${BASE_URL}${SIGNIN_ENDPOINT}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        return dataResponse;
    } catch (error: any) {
        console.log(error.message);
        throw new Error("Fetch Error", error);
    }
};

export const logOutAccount = async () => {
    
};