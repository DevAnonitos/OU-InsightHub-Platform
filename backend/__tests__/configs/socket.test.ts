import socketConfig from "../../src/configs/socket.config";

describe("Socket Config", () => {
  it("Should be defined Socket Config", () => {
    expect(socketConfig).toBeDefined();
  });
})