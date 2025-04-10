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
  })
})