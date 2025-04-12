import redisClient from "../../src/configs/redis.config";

describe("Redis Config", () => {
  it("Should be defined Redis Config", () => {
    expect(redisClient).toBeDefined();
  })

  it("Should be Redis Config Snapshot", () => {
    expect(redisClient).toMatchSnapshot();
  })
})