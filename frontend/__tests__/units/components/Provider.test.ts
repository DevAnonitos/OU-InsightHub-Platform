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

  it("Should be defined a function", () => {
    expect(UserProvider).toBeInstanceOf(Function);
    expect(ThemeProvider).toBeInstanceOf(Function);
    expect(QueryProvider).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(UserProvider).toMatchSnapshot();
    expect(ThemeProvider).toMatchSnapshot();
    expect(QueryProvider).toMatchSnapshot();
  });
});