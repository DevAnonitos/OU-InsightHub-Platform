import notificationService from "@/services/impl/notification.service";

describe("Notification Services", () => {
  it("Should be defined Notification Services", () => {
    expect(notificationService).toBeDefined();
  })

  it("Should be Snapshot", () => {
    expect(notificationService).toMatchSnapshot();
  });
})