import tokenService from "@/services/impl/token.service";
import { Request, Response, NextFunction } from "express";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    const authHeader  = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    const token = authHeader.split(" ")[1]
    console.log("Token:", token);
    if(!token) return res.sendStatus(401).json({ message: "Unauthorized" });
    
    try {
        next();
    } catch (error: any) {
        res.status(401).json({
            message: "Authorize Fail",
            error: (error as Error).message,
        });
    }
};