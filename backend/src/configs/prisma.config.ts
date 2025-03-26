import { PrismaClient } from "@prisma/client";
// Declare Global Scope Prisma
declare global {
    var prisma: PrismaClient | undefined;
};

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

prisma.$connect().then(() => {
    console.log("Connected to the database");
}).catch((error: any) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
});

export default prisma;