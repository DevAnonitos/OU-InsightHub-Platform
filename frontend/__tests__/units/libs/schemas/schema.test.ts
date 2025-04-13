import { signInSchema, signUpSchema } from "@/lib/schemas";

describe("Schema", () => {
  it("Should be defined Sign In Schema", () => {
    expect(signInSchema).toBeDefined();
  });

  it("Should be defined Sign Up Schema", () => {
    expect(signUpSchema).toBeDefined();
  });

  it("Should be defined a funtcion", () => {
    expect(signInSchema).toBeInstanceOf(Object);
    expect(signUpSchema).toBeInstanceOf(Object);
  });

  it("Should be defined a type of funtcion", () => {
    expect(typeof signInSchema).toBe('object');
    expect(typeof signUpSchema).toBe('object');
  });

  it("Should be Snapshot", () => {
    expect(signInSchema).toMatchSnapshot();
    expect(signUpSchema).toMatchSnapshot();
  });
});