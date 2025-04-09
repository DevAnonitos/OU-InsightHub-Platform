import { signIn, signUp, signOut } from "../../src/controllers/auth.controller";

describe("Auth Controller", () => {
  it("Should be defined SignIn", () => {
    expect(signIn).toBeDefined();
  });

  it("Should be defined SignUp", () => {
    expect(signUp).toBeDefined();
  });

  it("Should be defined SignUp", () => {
    expect(signOut).toBeDefined();
  });
})