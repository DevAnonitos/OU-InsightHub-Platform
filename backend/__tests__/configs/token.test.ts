import { tokenConfig } from "../../src/configs/token.config";

describe("Token Config", () => {
  it("Should be defined Token Config", () => {
    expect(tokenConfig).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(tokenConfig).toBeInstanceOf(Function);
  });


  // it("Should be Token Config Snapshot", () => {
  //   expect(tokenConfig).toMatchSnapshot();
  // })
})