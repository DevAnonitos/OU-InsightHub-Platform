import { Request, Response, NextFunction } from "express";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    const authHeader  = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader
    console.log("Token:", token);
    
    if(!token) return res.sendStatus(401).json({ message: "Unauthorized" });
    
    try {

        next();
    } catch (error: any) {
        res.status(401).json({
            message: "Unauthorized",
            error: error.message
        });
    }
};