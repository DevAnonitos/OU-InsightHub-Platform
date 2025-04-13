import corsConfig from "../../src/configs/cors.config";

describe("CORS Config", () => {
  it("Should be defined CORS Config", () => {
    expect(corsConfig).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(corsConfig).toBeInstanceOf(Function);
  });

  it("Should be defined Snapshot", () => {
    expect(corsConfig).toMatchSnapshot();
  });
})