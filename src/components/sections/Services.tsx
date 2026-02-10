import { ArrowUpRight } from "lucide-react";
import { Card } from "../ui";
import { SERVICES } from "../../data";

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-black text-white px-6 md:px-20">
      <div className="mb-8 md:mb-12">
        <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4">
          INOVAÇÃO EM CONECTIVIDADE
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
          Soluções que impulsionam o seu{" "}
          <span className="text-gold">futuro digital.</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
          Explore nossa infraestrutura de última geração e serviços inteligentes
          projetados para máxima performance, segurança e escalabilidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <Card
            key={index}
            className={`
                group relative overflow-hidden rounded-3xl p-4 md:p-8 
                bg-card border-white/5 hover:border-gold/30 
                transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5
                flex flex-col justify-between
                ${service.colSpan}
                min-h-[300px]
              `}
          >
            {/* Gradient Blob Background */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-gold/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div
                  className={`p-2 rounded-2xl bg-white/10 ${service.color} bg-opacity-10 backdrop-blur-sm`}
                >
                  <service.icon size={32} className={service.color} />
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-gold group-hover:rotate-45 transition-all duration-300 transform" />
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-base mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
