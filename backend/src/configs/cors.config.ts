import cors from "cors";

// Config CORS Logic
const allowedOriginsArray: string[] = process.env.ALLOWED_ORIGINS?.split(",") || [
    "http://localhost:3000",
];

const allowedOriginsSet: Set<string> = new Set(allowedOriginsArray);
const originCache: Map<string, boolean> = new Map();

const corsOptions: cors.CorsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin) {
          return callback(null, true);
        }

        if (originCache.has(origin)) {
          return callback(null, originCache.get(origin));
        }

        const isAllowed = allowedOriginsSet.has(origin);
        originCache.set(origin, isAllowed);

        if (isAllowed) {
          return callback(null, true);
        } else {
          return callback(new Error(`Origin ${origin} not allowed by CORS`), false);
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 3600,
    optionsSuccessStatus: 204
};

export default cors(corsOptions);
