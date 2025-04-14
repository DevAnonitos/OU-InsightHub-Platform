import { comparePassword, hashPassword } from "@/libs/utils/bcrypt.util";
import { generateToken, verifyToken, refreshAccesToken } from "@/libs/utils/token.utils";

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

  it("Should be define Token", () => {
    expect(generateToken).toBeDefined();
    expect(verifyToken).toBeDefined();
    expect(refreshAccesToken).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(generateToken).toBeInstanceOf(Function);
    expect(verifyToken).toBeInstanceOf(Function);
    expect(refreshAccesToken).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(generateToken).toMatchSnapshot();
    expect(verifyToken).toMatchSnapshot();
    expect(refreshAccesToken).toMatchSnapshot();
  }); 
});