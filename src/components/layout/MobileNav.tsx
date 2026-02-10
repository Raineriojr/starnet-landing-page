import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";

interface MobileNavProps {
  currentYear: number;
  onNavigate: (id: string) => void;
}

export function MobileNav({ currentYear, onNavigate }: MobileNavProps) {
  return (
    <div className="md:hidden">
      <Drawer modal={false}>
        <DrawerTrigger asChild>
          <Menu className="w-6 h-6" />
        </DrawerTrigger>
        <DrawerContent className="bg-card border-none text-white h-[60vh] outline-none">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle asChild>
                <DrawerClose onClick={() => onNavigate("inicio")}>
                  <span className="text-2xl">
                    <span className="text-gold">Star</span>net
                  </span>
                </DrawerClose>
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <ul className="flex flex-col gap-6 text-lg font-medium text-center">
                <li>
                  <DrawerClose asChild>
                    <button
                      onClick={() => onNavigate("sobre")}
                      className="hover:text-gold transition-colors block py-2 w-full"
                    >
                      Sobre
                    </button>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <button
                      onClick={() => onNavigate("servicos")}
                      className="hover:text-gold transition-colors block py-2 w-full"
                    >
                      Serviços
                    </button>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <button
                      onClick={() => onNavigate("avaliacao")}
                      className="hover:text-gold transition-colors block py-2 w-full"
                    >
                      Avaliações
                    </button>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <button
                      onClick={() => onNavigate("contato")}
                      className="hover:text-gold transition-colors block py-2 w-full"
                    >
                      Contato
                    </button>
                  </DrawerClose>
                </li>
              </ul>
            </div>
            <DrawerFooter>
              <p className="text-center text-text-muted text-sm mt-8">
                &copy; {currentYear} Starnet Telecom. Todos os direitos
                reservados.
              </p>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
