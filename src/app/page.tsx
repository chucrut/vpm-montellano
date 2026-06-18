import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
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
      <main className="min-h-screen pb-16 md:pb-0">
        <Hero />
        <QuienesSomos />
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
