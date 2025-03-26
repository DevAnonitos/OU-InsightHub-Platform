import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    
  } catch (error: any) {
    next(error);
  }
};