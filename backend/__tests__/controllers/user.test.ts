import { getAllUsers } from "../../src/controllers/user.controller";

describe("User Controller", () => {
  it("Should be defined getAllUsers", () => {
    expect(getAllUsers).toBeDefined();
  });

})