import morgan, { StreamOptions } from "morgan";
import logger from "../loggers/winston.logger";

const stream: StreamOptions = {
  write: (message: string) => logger.http(message.trim()),
};

export const morganMiddleware = morgan("combined", { stream });


