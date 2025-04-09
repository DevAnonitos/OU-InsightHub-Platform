import corsConfig from "../../src/configs/cors.config";

describe("CORS Config", () => {
  it("Should be defined CORS Config", () => {
    expect(corsConfig).toBeDefined();
  })
})