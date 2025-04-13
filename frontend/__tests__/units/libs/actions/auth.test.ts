import { createAccount, loginAccount, logOutAccount } from "@/lib/actions/auth";

describe("Auth Actions Modules", () => {
  it("Should be defined", () => {
    expect(createAccount).toBeDefined();
    expect(loginAccount).toBeDefined();
    expect(logOutAccount).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(createAccount).toBeInstanceOf(Function);
    expect(loginAccount).toBeInstanceOf(Function);
    expect(logOutAccount).toBeInstanceOf(Function);
  });

  it("Should be defined a function", () => {
    expect(typeof createAccount).toBe('function');
    expect(typeof loginAccount).toBe('function');
    expect(typeof logOutAccount).toBe('function');
  });

  it("Should be Snapshoot", () => {
    expect(createAccount).toMatchSnapshot();
    expect(loginAccount).toMatchSnapshot();
    expect(logOutAccount).toMatchSnapshot();
  });
})