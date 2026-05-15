import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Areas from "@/components/Areas";
import Equipe from "@/components/Equipe";
import QuandoProcurar from "@/components/QuandoProcurar";
import FAQ from "@/components/FAQ";
import ArtigosSection from "@/components/ArtigosSection";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Areas />
      <Equipe />
      <QuandoProcurar />
      <FAQ />
      <ArtigosSection />
      <Contato />
    </>
  );
}
