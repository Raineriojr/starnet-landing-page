import { useState } from "react";
import * as motion from "motion/react-client";
import { MapPin, Mail, Phone, Copy } from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "../../data";
import {
  footerContainerVariants,
  footerBrandVariants,
  footerItemVariants,
  footerBottomVariants,
} from "@/animations/footer";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="px-6 md:px-20 border-t border-white/10 py-20 pb-10 bg-black text-white overflow-hidden">
      <motion.div
        variants={footerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-16"
      >
        <motion.div variants={footerBrandVariants} className="space-y-6">
          <div className="relative w-40 h-fit">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            Pioneirismo no futuro da conectividade digital com serviço de padrão
            ouro.
          </p>
        </motion.div>

        <motion.div variants={footerItemVariants}>
          <h3 className="font-bold mb-6 text-lg text-gold">Navegação</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.navigation.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-gold transition-colors block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={footerItemVariants}>
          <h3 className="font-bold mb-6 text-lg text-gold">Legal</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.legal.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-gold transition-colors block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={footerItemVariants} className="select-text">
          <h3 className="font-bold mb-6 text-lg text-gold">Contato</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-gold shrink-0 mt-1" />
              <span>
                {CONTACT_INFO.address}
                <br />
                {CONTACT_INFO.city}
              </span>
            </li>
            <li className="flex items-center gap-3 relative">
              <button
                onClick={handleCopy}
                className="flex items-center gap-3 hover:text-gold transition-all group/footer-phone"
                title="Clique para copiar"
              >
                <Phone size={20} className="text-gold shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
                <Copy
                  size={14}
                  className="opacity-0 group-hover/footer-phone:opacity-100 transition-opacity"
                />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] py-0.5 px-1.5 rounded font-bold animate-in fade-in zoom-in-95">
                    Copiado!
                  </span>
                )}
              </button>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-gold shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        variants={footerBottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex justify-center items-center gap-4"
      >
        <p>
          &copy; {currentYear} Starnet Telecom. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
