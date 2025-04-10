import { createUserStore } from "@/stores/UserStore";

describe("Store Component", () => {
  it("Should be defined RootLayout", () => {
    expect(createUserStore).toBeDefined();
  });
})