import { useState } from "react";
import { Button } from "../ui";
import { Phone, Check, ArrowRight, MessageCircle, Copy } from "lucide-react";
import { CONTACT_INFO } from "../../data";

export function CTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contato" className="py-24 px-6 md:px-20">
      <div className="bg-gold rounded-4xl p-6 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                Pronto para acelerar?
              </h2>
              <p className="text-black/80 text-lg md:text-xl max-w-xl font-medium leading-snug">
                Leve a ultra-velocidade da Starnet para sua casa ou empresa.
                Atendimento personalizado e instalação rápida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-black text-white hover:bg-black/80 border-transparent h-10 md:h-14 px-4 md:px-8 rounded-full text-base md:text-lg gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="bg-green-500 rounded-full p-1">
                    <MessageCircle
                      size={18}
                      fill="white"
                      className="text-white"
                    />
                  </div>
                  Chamar no WhatsApp
                </Button>
              </a>

              <button
                onClick={handleCopy}
                className="flex items-center gap-3 text-black/90 font-bold text-lg px-6 hover:text-white transition-all group/phone relative"
                title="Clique para copiar"
              >
                <Phone size={24} />
                <span>{CONTACT_INFO.phone}</span>
                <Copy
                  size={16}
                  className="opacity-0 group-hover/phone:opacity-100 transition-opacity ml-1"
                />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded animate-in fade-in slide-in-from-bottom-2">
                    Copiado!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 bg-black/5 rounded-4xl blur-md transform translate-y-4" />
            <div className="bg-black text-white p-8 md:p-10 rounded-4xl shadow-2xl relative border border-white/10">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <ArrowRight size={48} className="-rotate-45" />
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-gold font-bold tracking-widest text-sm uppercase">
                  Planos
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-lg">A partir de</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm align-top mt-2">R$</span>
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                    99
                  </span>
                  <span className="flex flex-col text-left leading-none">
                    <span className="text-2xl font-bold">,90</span>
                    <span className="text-gray-400 text-sm font-normal">
                      /mês
                    </span>
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-2 md:mb-8 border-t border-white/10 pt-2 md:pt-6">
                {[
                  "Instalação Grátis",
                  "Wi-Fi 6 de Alta Performance",
                  "Apps de Streaming Inclusos",
                  "Suporte 24h Premium",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="bg-gold/20 p-1 rounded-full">
                      <Check size={14} className="text-gold" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
