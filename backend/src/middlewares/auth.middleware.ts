import tokenService from "@/services/impl/token.service";
import { Request, Response, NextFunction } from "express";

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader  = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        const token = authHeader.split(" ")[1]
        console.log("Token:", token);
        if(!token) return res.sendStatus(401).json({ message: "Unauthorized" });
    
        const decoded = await tokenService.verifyToken(token, "access");

        (req as any).user = decoded;
        next();
    } catch (error: any) {
        res.status(401).json({
            message: "Authorize Fail",
            error: (error as Error).message,
        });
    }
};