import path from "path";
import { transports } from "winston";
import logger from "./winston.logger";

const createServiceLogger = (serviceName: string) => {
  const fileTransport = new transports.File({
    filename: path.join(__dirname, `../logs/${serviceName}.log`),
    level: "info",
  });

  const childLogger = logger.child({
    defaultMeta: { service: serviceName },
  });

  childLogger.add(fileTransport);

  return childLogger;
};

// Export từng logger
export const authLogger = createServiceLogger("auth");
export const userLogger = createServiceLogger("user");
export const paymentLogger = createServiceLogger("payment");