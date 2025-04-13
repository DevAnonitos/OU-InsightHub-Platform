import tokenService from "@/services/impl/token.service";

describe("Token Services", () => {
    it("Should be defined Token Services", () => {
      expect(tokenService).toBeDefined();
    })
  
    it("Should be Snapshot", () => {
      expect(tokenService).toMatchSnapshot();
    });
})