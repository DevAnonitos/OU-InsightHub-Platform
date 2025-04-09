import { getAllNotifications } from "../../src/controllers/notification.controller";

describe("Notification Controller", () => {
  it("Should be defined getAllNotifications", () => {
    expect(getAllNotifications).toBeDefined();
  });

})