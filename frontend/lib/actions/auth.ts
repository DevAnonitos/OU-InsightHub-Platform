"use server";

import { setAuthCookies } from "./cookies";
import { signInSchema, signUpSchema } from "../schemas";
import { SIGNIN_ENDPOINT, SIGNUP_ENDPOINT } from "@/constants/api-endpoint";

export const createAccount = async (data: any) => {
    try {
        const dataResponse = await fetch(``, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return;  
    } catch (error: any) {
        
        return;
    }
};

export const loginAccount = async (data: any) => {
    try {
        const dataResponse = await fetch(``, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    } catch (error: any) {
        
    }
};