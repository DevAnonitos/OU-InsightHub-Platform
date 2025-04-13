import { useIsMobile } from "@/hooks/use-mobile";
import { useDebounce } from "@/hooks/use-debounce";

describe("Hook Component", () => {
  it("Should be defined useDebounced", () => {
    expect(useDebounce).toBeDefined();
  });

  it("Should be defined useMobile", () => {
    expect(useIsMobile).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(useIsMobile).toBeInstanceOf(Function);
    expect(useDebounce).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(useDebounce).toMatchSnapshot();
    expect(useIsMobile).toMatchSnapshot();
  });
});
