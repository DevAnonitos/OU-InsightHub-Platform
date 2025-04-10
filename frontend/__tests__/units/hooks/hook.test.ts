import { useIsMobile } from "@/hooks/use-mobile";
import { useDebounce } from "@/hooks/use-debounce";

describe("Hook Component", () => {
  it("Should be defined useDebounced", () => {
    expect(useDebounce).toBeDefined();
  });

  it("Should be defined useMobile", () => {
    expect(useIsMobile).toBeDefined();
  });
});