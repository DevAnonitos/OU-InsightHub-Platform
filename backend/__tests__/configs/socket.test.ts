import socketConfig from "../../src/configs/socket.config";

describe("Socket Config", () => {
  it("Should be defined Socket Config", () => {
    expect(socketConfig).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(socketConfig).toBeInstanceOf(Function);
  });

  it("Should be Socket Config Snapshoot", () => {
    expect(socketConfig).toMatchSnapshot();
  });
});