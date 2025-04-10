import HeroSection from "@/components/Sections/HeroSection";
import StatsSection from "@/components/Sections/StatsSection";
import SearchHeroSection from "@/components/Sections/SearchSection";

describe("Section Component", () => {
  it("Should be defined Hero Section", () => {
    expect(HeroSection).toBeDefined();
  });

  it("Should be defined Stats Section", () => {
    expect(StatsSection).toBeDefined();
  });

  it("Should be defined Search Hero Section", () => {
    expect(SearchHeroSection).toBeDefined();
  });
})