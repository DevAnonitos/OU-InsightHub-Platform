import express, { Express } from "express";

import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import corsConfig from "./cors.config";


dotenv.config();

export const securityConfig = (app: Express): void => {

  app.use(corsConfig);

  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    xssFilter: true,
  }));

  app.use(compression());

  app.use(express.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cookieParser());
};