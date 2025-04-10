import SignUpForm from "@/components/Form/SignUpForm";
import SignInForm from "@/components/Form/SignInForm";

describe("Form Component", () => {
  it("Should be defined SignUpForm Component", () => {
    expect(SignUpForm).toBeDefined();
  });

  it("Should be defined SignInForm Component", () => {
    expect(SignInForm).toBeDefined();
  });
})