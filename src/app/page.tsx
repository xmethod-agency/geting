import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GridLines } from "@/components/grid-lines";
import { Hero } from "@/components/sections/hero";
import { StackIndex } from "@/components/sections/stack-index";
import { AmberStatement } from "@/components/sections/amber-statement";
import { Infrastructure } from "@/components/sections/infrastructure";
import { GpuShowcase } from "@/components/sections/gpu-showcase";
import { CustomEngineering } from "@/components/sections/custom-engineering";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <GridLines />
      <Header />
      <main className="flex-1 relative z-10">
        <Hero />
        <StackIndex />
        <AmberStatement />
        <Infrastructure />
        <GpuShowcase />
        <CustomEngineering />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
