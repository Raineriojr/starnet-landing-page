import { MobileNav } from "./MobileNav";

export function Header() {
  const currentYear = new Date().getFullYear();

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="px-6 border-b border-border sticky top-0 bg-black/40 backdrop-blur-md z-50">
      <nav className="flex items-center justify-between py-4 md:py-6 w-full">
        <div className="relative w-30 md:w-40 h-full">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => (window.location.href = "#inicio")}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12 text-base font-medium">
          <li>
            <a href="#sobre" className="hover:text-gold transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#servicos" className="hover:text-gold transition-colors">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-gold transition-colors">
              Contato
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <MobileNav currentYear={currentYear} onNavigate={scrollTo} />
      </nav>
    </header>
  );
}
