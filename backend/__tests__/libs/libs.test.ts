import { comparePassword, hashPassword } from "@/libs/utils/bcrypt.util";

describe("Libs API", () => {
  it("Should be define ComparePassword", () => {
    expect(comparePassword).toBeDefined();
  });

  it("Should be Snapshot", () => {
    expect(comparePassword).toMatchSnapshot();
  });

  it("Should be define HashedPassword", () => {
    expect(hashPassword).toBeDefined();
  });

  it("Should be Snapshot", () => {
    expect(hashPassword).toMatchSnapshot();
  });

  it("Should be defined a function", () => {
    expect(comparePassword).toBeInstanceOf(Function);
    expect(hashPassword).toBeInstanceOf(Function);
  });
});