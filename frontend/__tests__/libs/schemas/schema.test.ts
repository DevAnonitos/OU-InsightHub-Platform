import { signInSchema, signUpSchema } from "@/lib/schemas";

describe("Schema", () => {
  it("Should be defined Sign In Schema", () => {
    expect(signInSchema).toBeDefined();
  })

  it("Should be defined Sign Up Schema", () => {
    expect(signUpSchema).toBeDefined();
  })
})