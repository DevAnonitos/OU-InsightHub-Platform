import prismaConfig from "../../src/configs/prisma.config";

beforeAll(async () => {
  await prismaConfig.$connect();
})

afterAll(async () => {
  await prismaConfig.$disconnect();
});

describe("Prisma client", () => {
  it("Should be defined", () => {
    expect(prismaConfig).toBeDefined();
  })
})