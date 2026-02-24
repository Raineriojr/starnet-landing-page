import { useState, useRef, useEffect } from "react";
import * as motion from "motion/react-client";
import { Card } from "../ui";
import { ABOUT_FEATURES } from "../../data";
import { cn } from "@/lib/utils";

import {
  aboutContainerVariants,
  aboutItemVariants,
  descriptionVariants,
} from "@/animations/about";
import { wordItem, wordsContainer } from "@/animations/hero";

const text = "Desbravando a Fronteira Digital com Serviço Padrão Ouro";

export function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="sobre"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 md:py-56 bg-bg-secondary px-6 md:px-20 relative overflow-hidden min-h-screen my-auto"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={aboutContainerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-10">
          <div className="space-y-6">
            <motion.p
              variants={aboutItemVariants}
              initial="hidden"
              whileInView="visible"
              className="text-gold text-sm font-bold tracking-[0.2em] uppercase"
            >
              SOBRE A STARNET
            </motion.p>
            <motion.h1
              variants={wordsContainer}
              initial="hidden"
              whileInView="show"
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {text.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordItem}
                  className={cn(
                    "inline-block mr-2",
                    word === "Padrão" && "text-gold",
                    word === "Ouro" && "text-gold",
                  )}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              whileInView="visible"
              className="text-text-secondary text-lg leading-relaxed max-w-xl"
            >
              A Starnet nasceu com o propósito de levar conexão onde ninguém
              chegava. Superamos desafios técnicos e estruturamos redes em
              regiões remotas, entregando internet onde antes era impossível.
              Hoje, somos uma empresa de infraestrutura e soluções tecnológicas
              completas. Atuamos com redes corporativas, segurança da
              informação, cloud computing, data center e automação, sempre com
              foco em{" "}
              <span className="font-bold text-gold">
                alta disponibilidade, segurança e performance escalável.{" "}
              </span>
              Conectamos territórios, integramos sistemas e fortalecemos
              negócios com tecnologia robusta, inteligente e preparada para o
              futuro. Tecnologia que sustenta operações. Conectividade que
              impulsiona resultados. 🚀
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={aboutContainerVariants}
          className="grid grid-cols-2 gap-6"
          ref={containerRef}
        >
          {ABOUT_FEATURES.map((feature, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div key={index} variants={aboutItemVariants}>
                <Card
                  onClick={() => handleCardClick(index)}
                  className={`bg-card border-none transition-all duration-500 p-2 md:p-6 flex flex-col items-center text-center gap-4 group min-h-[220px] justify-center relative overflow-hidden cursor-pointer h-full ${
                    isActive ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`text-3xl md:text-4xl mb-2 text-gold transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-20 group-hover:opacity-0 ${
                      isActive ? "-translate-y-20 opacity-0 scale-110" : ""
                    }`}
                  >
                    {feature.icon}
                  </div>

                  <div className="relative w-full">
                    <h3
                      className={`font-bold text-sm md:text-lg mb-1 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 ${
                        isActive ? "opacity-0 translate-y-4" : ""
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <div
                      className={`absolute inset-0 mb-20 flex items-center justify-center transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0"
                      }`}
                    >
                      <p className="font-semibold text-xs md:text-sm text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
