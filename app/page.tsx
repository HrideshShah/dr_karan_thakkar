import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import HospitalHours from "@/components/HospitalHours";
import CaseReports from "@/components/CaseReports";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <CaseReports />
      <HospitalHours />
    </>
  );
}
