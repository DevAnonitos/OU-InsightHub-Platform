import SignUpForm from "@/components/Form/SignUpForm";
import SignInForm from "@/components/Form/SignInForm";

describe("Form Component", () => {
  it("Should be defined SignUpForm Component", () => {
    expect(SignUpForm).toBeDefined();
  });

  it("Should be defined SignInForm Component", () => {
    expect(SignInForm).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(SignUpForm).toBeInstanceOf(Function);
    expect(SignInForm).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(SignUpForm).toMatchSnapshot();
    expect(SignInForm).toMatchSnapshot();
  });
})
