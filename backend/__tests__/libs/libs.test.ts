import { comparePassword, hashPassword } from "../../src/libs/utils/bcrypt.util";

describe("Libs API", () => {
  it("Should be define ComparePassword", () => {
    expect(comparePassword).toBeDefined();
  });

  it("Should be define HashedPassword", () => {
    expect(hashPassword).toBeDefined();
  });
})