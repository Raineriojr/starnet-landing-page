export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 md:px-12 -mt-10
        bg-[url('/background.jpg')]
        bg-fill md:bg-cover bg-top
        bg-fixed
      "
    >
      {/* overlay escuro pra legibilidade */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl text-center space-y-8">
        <p className="text-gold text-xl font-bold tracking-[0.2em] uppercase">
          Bem-vindo à Starnet
        </p>

        <div className="flex flex-col gap-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Conectividade
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gold">
            Ultra-Rápida
          </h1>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Chega de quedas e lentidão. Com a Starnet, você tem internet rápida,
          estável e segura para trabalhar, jogar e conectar tudo ao seu mundo
          digital.
        </p>
      </div>
    </section>
  );
}
