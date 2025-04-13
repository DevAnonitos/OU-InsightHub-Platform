import userService from "@/services/impl/user.service";

describe("User Services", () => {
  it("Should be defined User Services", () => {
    expect(userService).toBeDefined();
  });

  it("Should be Snapshot", () => {
    expect(userService).toMatchSnapshot();
  });
});