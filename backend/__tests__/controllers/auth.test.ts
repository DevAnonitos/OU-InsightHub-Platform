import { signIn, signUp, signOut } from "@/controllers/auth.controller";

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

  it("Should be defined a function", () => {
    expect(signIn).toBeInstanceOf(Function);
    expect(signUp).toBeInstanceOf(Function);
    expect(signOut).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(signIn).toMatchSnapshot();
    expect(signUp).toMatchSnapshot();
    expect(signOut).toMatchSnapshot();
  });
})