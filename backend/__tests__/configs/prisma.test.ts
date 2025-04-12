import prismaConfig from "../../src/configs/prisma.config";

beforeAll(async () => {
  await prismaConfig.$connect();
})

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Prisma client", () => {
  it("Should be defined", () => {
    expect(prismaConfig).toBeDefined();
  })

  it("Should be snapshot", () => {
    expect(prismaConfig).toMatchSnapshot();
  })
})