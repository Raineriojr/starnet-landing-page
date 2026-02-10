import { MapPin, Mail, Phone } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "../../data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-20 border-t border-white/10 py-20 pb-10 bg-black text-white">
      <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
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
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
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
        </div>

        {/* Legal */}
        <div>
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
        </div>

        {/* Contact Info */}
        <div>
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
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-gold shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-gold shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ... Copyright ... */}
      <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex justify-center items-center gap-4">
        <p>
          &copy; {currentYear} Starnet Telecom. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

// Redoing the replacement content to be fully correct and complete.
