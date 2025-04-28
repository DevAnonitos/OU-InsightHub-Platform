import path from "path";
import { LoggerOptions, transports, format } from "winston";

const { combine, timestamp, printf, colorize, errors } = format;

export const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

export const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

export const level = () => {
  const env = process.env.NODE_ENV || "development";
  return env === "development" ? "debug" : "warn";
};

const devFormat = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  errors({ stack: true }),
  colorize({ all: true }),
  printf((info) => {
    const service = info.service ? `[${info.service}]` : "";
    return `${info.timestamp} ${info.level}: ${service} ${info.stack || info.message}`;
  })
);

const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
);

// Config transport
const consoleTransport = new transports.Console();

const errorFileTransport = new transports.File({
  filename: path.join(__dirname, "../logs/error.log"),
  level: "error",
});

const allFileTransport = new transports.File({
  filename: path.join(__dirname, "../logs/all.log"),
});

export const winstonConfig: LoggerOptions = {
  levels,
  format: process.env.NODE_ENV === "production" ? prodFormat : devFormat,
  transports: [
    consoleTransport,
    errorFileTransport,
    allFileTransport,
  ],
  exceptionHandlers: [
    new transports.File({
      filename: path.join(__dirname, "../logs/exceptions.log"),
    }),
  ],
  rejectionHandlers: [
    new transports.File({
      filename: path.join(__dirname, "../logs/rejections.log"),
    }),
  ],
};