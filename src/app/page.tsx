import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Campanas from "@/components/Campanas";
import NuestroEquipo from "@/components/NuestroEquipo";
import NuestraPropuesta from "@/components/NuestraPropuesta";
import QueEstaPasando from "@/components/QueEstaPasando";
import TeEscuchamos from "@/components/TeEscuchamos";
import Unete from "@/components/Unete";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
        <Hero />
        <QuienesSomos />
        <Campanas />
        <NuestroEquipo />
        <NuestraPropuesta />
        <QueEstaPasando />
        <TeEscuchamos />
        <Unete />
      </main>
      <Footer />
    </>
  );
}
