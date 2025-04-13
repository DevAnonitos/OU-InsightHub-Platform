import { getAllUsers } from "../../src/controllers/user.controller";

describe("User Controller", () => {
  it("Should be defined getAllUsers", () => {
    expect(getAllUsers).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(getAllUsers).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(getAllUsers).toMatchSnapshot();
  });
})