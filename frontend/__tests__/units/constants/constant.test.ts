import { SIGNIN_ENDPOINT, SIGNUP_ENDPOINT, SIGNOUT_ENDPOINT } from "@/constants/api-endpoint";

describe("Contant Test", () => {
  describe("API Endpoint", () => {
    it("Should be defined SignIn Endpoint", () => {
      expect(SIGNIN_ENDPOINT).toBeDefined();
    });

    it("Should be defined SignUp Endpoint", () => {
      expect(SIGNUP_ENDPOINT).toBeDefined();
    });

    it("Should be defined SignIn Endpoint", () => {
      expect(SIGNOUT_ENDPOINT).toBeDefined();
    });

    it("Should be defined a type of function", () => {
      expect(typeof SIGNIN_ENDPOINT).toBe("string");
      expect(typeof SIGNUP_ENDPOINT).toBe("string");
      expect(typeof SIGNOUT_ENDPOINT).toBe("string");
    });

    it("Should be Snapshot", () => {
      expect(SIGNIN_ENDPOINT).toMatchSnapshot();
      expect(SIGNUP_ENDPOINT).toMatchSnapshot();
      expect(SIGNOUT_ENDPOINT).toMatchSnapshot();
    });
  });
})
