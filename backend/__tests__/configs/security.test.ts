import { securityConfig } from "../../src/configs/security.config"

describe("Security API", () => {
  it("Should be defined Security Config", () => {
    expect(securityConfig).toBeDefined();
  });
});