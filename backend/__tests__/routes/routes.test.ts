import routes from "@/routes/v1";

describe("API Routes", () => {
  it("Should be defined", () => {
    expect(routes).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(routes).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(routes).toMatchSnapshot();
  });
});