import * as motion from "motion/react-client";
import {
  backGroundVariants,
  containerVariants,
  overlayVariants,
  titleVariants,
} from "@/animations/hero";

import { SplitText } from "../custom/splitText";

export function Hero() {
  const title1 = "Excelência em";
  const title2 = "Conectividade e Soluções Tecnológicas";

  return (
    <section
      id="inicio"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 md:px-12 -mt-10
        overflow-hidden
      "
    >
      {/* Background */}
      <motion.div
        variants={backGroundVariants}
        initial="hidden"
        whileInView="visible"
        className="absolute inset-0 bg-[url('/background.jpg')] bg-fill md:bg-cover bg-top lg:bg-fixed"
      />

      {/* overlay */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative z-10 max-w-4xl text-center space-y-8"
      >
        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          className="text-gold text-xl font-bold tracking-[0.2em] uppercase"
        >
          Bem-vindo à Starnet
        </motion.p>

        <div className="flex flex-col gap-2">
          <SplitText
            text={title1}
            className="text-4xl sm:text-7xl font-bold leading-tight"
          />
          <SplitText
            text={title2}
            className="text-4xl sm:text-7xl font-bold leading-tight text-gold"
          />
        </div>

        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          className="text-gray-300 text-lg font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Especialistas em conectar, proteger e impulsionar negócios por meio de
          soluções integradas em internet de alta performance e tecnologia
          corporativa.
        </motion.p>
      </motion.div>
    </section>
  );
}
