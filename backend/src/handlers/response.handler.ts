import { Response } from "express";
import { IResponseData } from "../interfaces";

export const responseHandler = {
  success: (res: Response, data?: any, message: string = "Success"): void => {
    const responseBody: IResponseData = {
      status: 200,
      message,
      data
    };
    res.status(200).json(responseBody);
  },

  created: (res: Response, data?: any, message: string = "Created successfully"): void => {
    const responseBody: IResponseData = {
      status: 201,
      message,
      data
    };
    res.status(201).json(responseBody);
  },

  badRequest: (res: Response, message: string = "Bad request"): void => {
    const responseBody: IResponseData = {
      status: 400,
      message
    };
    res.status(400).json(responseBody);
  },

  unauthorized: (res: Response, message: string = "Unauthorized"): void => {
    const responseBody: IResponseData = {
      status: 401,
      message
    };
    res.status(401).json(responseBody);
  },

  forbidden: (res: Response, message: string = "Forbidden"): void => {
    const responseBody: IResponseData = {
      status: 403,
      message
    };
    res.status(403).json(responseBody);
  },

  notFound: (res: Response, message: string = "Not found"): void => {
    const responseBody: IResponseData = {
      status: 404,
      message
    };
    res.status(404).json(responseBody);
  },

  serverError: (res: Response, error?: any): void => {
    const responseBody: IResponseData = {
      status: 500,
      message: "Internal server error",
      data: process.env.NODE_ENV === "development" ? error : undefined
    };
    res.status(500).json(responseBody);
  }
};

