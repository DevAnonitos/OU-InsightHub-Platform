import authService from "@/services/impl/auth.service";

describe("Auth Services", () => {
  it("Should be defined Auth Services", () => {
    expect(authService).toBeDefined();
  });

  it("Should be Snapshot", () => {
    expect(authService).toMatchSnapshot();
  });
})