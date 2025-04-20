import tokenService from "@/services/impl/token.service";
import { Request, Response, NextFunction } from "express";

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("❌ No token provided in Authorization header");
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      console.log("❌ Token not found after Bearer prefix");
      res.status(401).json({ message: "Unauthorized: Invalid token" });
      return;
    }

    console.log("✅ Token received:", token);

    const decoded = await tokenService.verifyToken(token, "access");

    if (!decoded) {
      console.log("❌ Token verification failed");
      res.status(403).json({ message: "Forbidden: Invalid token" });
      return;
    }

    console.log("✅ Token verified. Decoded payload:", decoded);

    // Gắn user vào req để các controller phía sau sử dụng
    (req as any).user = decoded;

    next(); // Cho phép đi tiếp
  } catch (error: any) {
    console.error("❌ Authorization error:", error.message);
    res.status(401).json({
      message: "Authorization failed",
      error: error.message,
    });
  }
};
