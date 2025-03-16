import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSection from "@/components/Sections/HeroSection";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import StatsSection from "@/components/Sections/StatsSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <HeroSection/>
      <CategoriesSection />
      <StatsSection />
    </main>
  );
};
