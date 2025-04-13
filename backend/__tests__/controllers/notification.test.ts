import { getAllNotifications } from "../../src/controllers/notification.controller";

describe("Notification Controller", () => {
  it("Should be defined getAllNotifications", () => {
    expect(getAllNotifications).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(getAllNotifications).toBeInstanceOf(Function);
  });
  
  it("Should be Snapshot", () => {
    expect(getAllNotifications).toMatchSnapshot();
  });
})