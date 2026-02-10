import { Card } from "../ui";

import { ABOUT_FEATURES } from "../../data";

export function About() {
  return (
    <section
      id="sobre"
      className="py-24 md:py-32 bg-bg-secondary px-6 md:px-20 relative overflow-hidden min-h-screen my-auto"
    >
      {/* Background Glow Effect - Optional but enhances 'premium' feel */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Metrics & Text */}
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase">
              SOBRE A STARNET
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Desbravando a Fronteira Digital com Serviço{" "}
              <span className="text-gold">Padrão Ouro</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              Fundada nos princípios de confiabilidade e velocidade, a Starnet
              evoluiu de um provedor local para uma liderança nacional em
              infraestrutura de fibra óptica. Acreditamos que internet de alta
              velocidade é um direito fundamental que impulsiona a inovação
              moderna.
            </p>
          </div>

          <div className="flex md:flex-col flex-row gap-12 pt-4">
            <div>
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2">
                99,9%
              </div>
              <p className="text-text-muted text-xs md:text-sm tracking-wider uppercase font-medium">
                Garantia de Uptime
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2">
                2,5 Gbps
              </div>
              <p className="text-text-muted text-xs md:text-sm tracking-wider uppercase font-medium">
                Velocidade Máxima
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {ABOUT_FEATURES.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-none hover:bg-white/5 transition-all duration-300 p-8 flex flex-col items-center text-center gap-4 group"
            >
              <div className="text-3xl md:text-4xl mb-2 text-gold group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg mb-1">
                  {feature.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
