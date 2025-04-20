import { Request, Response } from "express";
import userService from "../services/impl/user.service";
import { responseHandler } from "../handlers/response.handler";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUsers();
        return responseHandler.success(res, user);
    } catch (error: any) {
        return responseHandler.serverError(res, error);
    }
};

export const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?.id;
        const user = await userService.getCurrentUser(userId);
        if(!user) return responseHandler.notFound(res, "User not found");
        return responseHandler.success(res, user);
    } catch (error: any) {
       console.log(error);
       return responseHandler.serverError(res, error);
    } 
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        
    }
};

export const updateUserById = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        
    }
};

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await userService.deleteUser(id);
        return responseHandler.success(res);
    } catch (error: any) {
        return responseHandler.serverError(res, error);
    }
};

export const changePassword = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        
    }
};

export const uploadAvatar = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        
    }
};