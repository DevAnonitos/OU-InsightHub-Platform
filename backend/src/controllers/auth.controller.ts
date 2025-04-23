import { Request, Response } from "express";
import authService from "@/services/impl/auth.service";
import { responseHandler } from "@/handlers/response.handler";
import { signInSchema, signUpSchema } from "@/libs/schemas/auth.schema";
import tokenService from "@/services/impl/token.service";

export const signIn = async (req: Request, res: Response) => {
    try {
        const parsed = signInSchema.safeParse(req.body);
        if(!parsed.success) return responseHandler.badRequest(res, parsed.error.message);
        const { user, tokens}  = await authService.loginAccount(parsed.data);
        return responseHandler.success(res, {
            user,
            tokens,
        });
    } catch (error: any) {
        console.log(error.message);
        return responseHandler.unauthorized(res, error.message);
    }
};

export const signUp = async (req: Request, res: Response) => {
    try {
        const parsed = signUpSchema.safeParse(req.body);
        if(!parsed.success) return responseHandler.badRequest(res, parsed.error.message);
        const { user, tokens } = await authService.createNewAccount(parsed.data);
        return responseHandler.created(res, {
            user,
            tokens,
        });
    } catch (error: any) {
        console.log(error.message);
        return responseHandler.badRequest(res, error.message);
    }
};

export const google = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        return;
    }
};

export const signOut = async (req: Request, res: Response) => {
    try {
       res.clearCookie("accessToken");
       res.clearCookie("refreshToken");

       return responseHandler.success(res, { message: "Successfully logged out!" });
    } catch (error: any) {
        return responseHandler.serverError(res, error);
    }
};

export const refreshToken = async (req: Request, res: Response) => {
    try {
       const refreshToken = (req as any).body?.refreshToken;

       console.log('Received refresh token:', refreshToken);

       const tokens = await authService.refreshToken(refreshToken);

       return responseHandler.success(res, {
            tokens
       });
    } catch (error: any) {
        console.error('Error in refreshToken:', error);
        return responseHandler.serverError(res, error);
    }
};

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
};