import { Request, Response } from "express";
import authService from "@/services/impl/auth.service";
import { responseHandler } from "@/handlers/response.handler";
import { signInSchema, signUpSchema } from "@/libs/schemas/auth.schema";


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

export const googleLogin = async (req: Request, res: Response) => {
    try {
        const url = await authService.googleAuthUrl();
        return responseHandler.success(res, { url });
    } catch (error: any) {
        return responseHandler.serverError(res, error.message);
    }
};

export const googleCallback = async (req: Request, res: Response) => {
    try {
        const code = req.query.code as string;

        if (!code) {
        return responseHandler.badRequest(res, "Missing Google authorization code");
        }

        const { user, tokens } = await authService.googleLoginAccount(code);

        const isProd = process.env.NODE_ENV === "production";

        res.cookie("accessToken", tokens.accessToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000, // 1 hour in ms
            path: "/",
          });
      
          res.cookie("refreshToken", tokens.refreshToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
            path: "/",
          });

          const userParam = encodeURIComponent(JSON.stringify(user));
          const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
          const redirectUrl = `${clientUrl}/oauth-success?user=${userParam}`;
          
        return res.redirect(redirectUrl);
    } catch (error: any) {
        return responseHandler.unauthorized(res, error.message);
    }   
}

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