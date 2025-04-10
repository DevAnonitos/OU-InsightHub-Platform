import QueryProvider from "@/components/Providers/QueryProvider";
import { UserProvider } from "@/components/Providers/UserProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

describe("Provider Component", () => {
  it("Should be defined User Provider", () => {
    expect(UserProvider).toBeDefined();
  });

  it("Should be defined Theme Provider", () => {
    expect(ThemeProvider).toBeDefined();
  });

  it("Should be defined Query Provider", () => {
    expect(QueryProvider).toBeDefined();
  });
})