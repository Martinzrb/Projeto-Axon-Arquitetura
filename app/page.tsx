// app/page.tsx
"use client";

import Beams from "@/components/ui/beams";
import NavRail from "@/components/ui/tubelight-navbar";
import FeaturedSteps from "@/components/ui/feature-section";
import { Home, User, Briefcase, FileText } from "lucide-react";
import Image from "next/image";

// --- 1. NAVBAR ---
const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Sobre", url: "#about", icon: User },
  { name: "Projetos", url: "#projects", icon: Briefcase },
  { name: "Contato", url: "#contact", icon: FileText },
];

// --- 2. FEATURE SECTION ---
const featuresArquitetura = [
  {
    step: "1",
    title: "Planejamento e Projeto",
    content:
      "Desenvolvemos o projeto arquitetônico completo, alinhando estética, funcionalidade e necessidades do cliente.",
    image: "/image/axon-inicio.png",
  },
  {
    step: "2",
    title: "Design de Interiores",
    content:
      "Criamos ambientes internos detalhados, garantindo conforto, design moderno e soluções inteligentes de espaço.",
    image: "/image/axon-interior.png",
  },
  {
    step: "3",
    title: "Entrega Realizada",
    content:
      "Acompanhar cada etapa da obra para entregar a casa pronta, perfeita e dentro do prazo, com excelência em cada detalhe.",
    image: "/image/axon-entrega.png",
  },
];

// --- 3. PROJETOS ---
const projetos = [
  { title: "Projeto 1", image: "/image/axon-inicio.png" },
  { title: "Projeto 2", image: "/image/axon-interior.png" },
  { title: "Projeto 3", image: "/image/axon-entrega.png" },
  { title: "Projeto 4", image: "/image/axon-inicio.png" },
  { title: "Projeto 5", image: "/image/axon-interior.png" },
  { title: "Projeto 6", image: "/image/axon-entrega.png" },
  { title: "Projeto 7", image: "/image/axon-inicio.png" },
  { title: "Projeto 8", image: "/image/axon-interior.png" },
  { title: "Projeto 9", image: "/image/axon-entrega.png" },
];

// --- 4. PAGE COMPONENT ---
export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-2 sm:px-0">
        <NavRail items={navItems} />
      </div>

      {/* Home Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      >
        <div className="absolute inset-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor={"#ffffff"}
            speed={2}
            noiseIntensity={1.78}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight">
            ARQUITETURA QUE <br />
            RESPIRA TECNOLOGIA.
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-300">
            A AXON transforma seus sonhos em realidade com inovação e
            excelência.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none"></div>
      </section>

      {/* Sobre / Feature Section */}
      <section
        id="about"
        className="py-24 md:py-32 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-bold mb-16">
            Nosso Processo de Excelência
          </h2>
          <FeaturedSteps features={featuresArquitetura} />
        </div>
      </section>

      {/* Projetos Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-bold mb-16">Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((proj, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg cursor-pointer group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-bold mb-12">Contato</h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Seu email"
                className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Mensagem</label>
              <textarea
                placeholder="Sua mensagem"
                className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-primary focus:outline-none h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
