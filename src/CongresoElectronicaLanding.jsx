import React from "react";
import { motion } from "framer-motion";
import { Menu, Calendar, MapPin, Clock, Users, Cpu, ChevronRight, Mail, Phone, Globe, Building2, Trophy, Ticket, Layers, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Colores base inspirados en una estética universitaria sobria
const brand = {
  primary: "#0b3c78", // azul institucional
  secondary: "#0e5aa7", // azul medio
  accent: "#ffc107", // acento dorado
  muted: "#eff4fb", // gris azulado suave
};

const Pill = ({ children }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-white/70 border border-white/70 shadow-sm">
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold" style={{ color: brand.accent }}>{value}</div>
    <div className="text-sm opacity-80">{label}</div>
  </div>
);

const Nav = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0b3c78] to-[#0e5aa7] shadow-md" />
          <div className="leading-tight">
            <div className="font-bold text-lg" style={{ color: brand.primary }}>Congreso de Electrónica</div>
            <div className="text-xs">Innovación • Investigación • Industria</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:opacity-80" href="#programa">Programa</a>
          <a className="hover:opacity-80" href="#ponentes">Ponentes</a>
          <a className="hover:opacity-80" href="#talleres">Talleres</a>
          <a className="hover:opacity-80" href="#sede">Sede</a>
          <a className="hover:opacity-80" href="#inscripcion">Inscripción</a>
          <Button className="rounded-2xl" style={{ backgroundColor: brand.primary }}>
            Comprar entradas
          </Button>
        </nav>
        <Button variant="outline" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b3c78] via-[#0e5aa7] to-[#123b6e]" />
    <div className="absolute inset-0 -z-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, #ffffff 0, transparent 40%), radial-gradient(circle at 80% 30%, #ffffff 0, transparent 40%)" }} />
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <div className="flex gap-2 mb-4">
            <Pill>
              <Calendar className="inline h-3.5 w-3.5 mr-1" /> 24–26 Oct 2025
            </Pill>
            <Pill>
              <MapPin className="inline h-3.5 w-3.5 mr-1" /> Lima, Perú
            </Pill>
            <Pill>
              <Cpu className="inline h-3.5 w-3.5 mr-1" /> Electrónica & IA
            </Pill>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Congreso Internacional de Electrónica 2025
          </motion.h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl">
            Un encuentro académico y profesional con ponencias magistrales, paneles, talleres prácticos y feria tecnológica. Inspirado en el estilo institucional universitario.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-2xl" style={{ backgroundColor: brand.accent, color: "#1b1b1b" }}>
              Registrarme ahora
            </Button>
            <Button size="lg" variant="secondary" className="rounded-2xl bg-white/15 text-white border-white/30 hover:bg-white/25">
              Descubrir el programa
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat value="+30" label="Ponentes" />
            <Stat value="+20" label="Talleres" />
            <Stat value="3" label="Días" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Ponentes = () => (
  <section id="ponentes" className="py-14">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand.primary }}>Ponentes destacados</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {[
          {
            name: "ARMAS CASTAÑEDA RICHARD MILLER",
            desc: "Licenciado en Educación en Electrónica, docente universitario UNE, instructor CCNA y asesor en telecomunicaciones. Maestro en Ciencias de la Educación e Ingeniero en Sistemas. Interesado en IA, realidad aumentada y automatización aplicada.",
          },
          {
            name: "ORTIZ VERGARA MARTIN WILLIAM",
            desc: "Docente egresado de Electrónica, con experiencia en docencia universitaria (UNE). Formación en Ingeniería Industrial (UNMSM), Mecatrónica (UTP) y Electrónica (UPC).",
          },
          {
            name: "ROMERO SANDOVAL JULIO AMARILDO",
            desc: "Docente de la Facultad de Tecnología de la UNE. Enseña en la Escuela Profesional de Electrónica y Telecomunicaciones en cursos de especialidad, talleres de investigación y prácticas preprofesionales.",
          },
          {
            name: "SORIA CUELLAR FIDEL TADEO",
            desc: "Docente universitario en Electrónica. Licenciado en Educación, maestro en Ciencias de la Educación (Administración Educacional) y doctor en Ciencias de la Educación. Investiga en educación universitaria.",
          },
        ].map((p, i) => (
          <Card key={i} className="rounded-2xl">
            <CardContent className="p-4">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 mb-3" />
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm opacity-70">{p.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default function CongresoElectronicaLanding() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Ponentes />
    </div>
  );
}
