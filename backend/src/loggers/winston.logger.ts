import winston from "winston";
import { winstonConfig, colors } from "../configs/winston.config";

winston.addColors(colors);

const logger = winston.createLogger(winstonConfig);

export default logger;