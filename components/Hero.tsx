import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Hero() {
  return (
    <section className="hero-grad text-light relative">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-5 text-accent-bright"
            style={{
              textShadow:
                "0 1px 2px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.85), 0 4px 14px rgba(0,0,0,0.7)",
            }}
          >
            Advocacia · Niterói e Vila Velha
          </div>
          <h1
            className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5"
            style={{
              textShadow:
                "0 1px 2px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.55)",
            }}
          >
            Direito Imobiliário,
            <br />
            com tradição
            <br />
            <span
              className="italic text-accent-bright"
              style={{
                textShadow:
                  "0 2px 3px rgba(0,0,0,0.95), 0 4px 10px rgba(0,0,0,0.8), 0 8px 22px rgba(0,0,0,0.6)",
              }}
            >
              registral e notarial.
            </span>
          </h1>
          <p
            className="text-base md:text-lg font-medium text-light max-w-xl mb-8 leading-relaxed"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Banca especializada em direito imobiliário, registral e notarial,
            com atuação judicial e extrajudicial em RJ e ES. Atendimento direto
            com os sócios.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full font-semibold">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A12 12 0 003.45 20.42L2 22l1.66-1.42a12 12 0 0016.86-17.1zM12 20a8 8 0 01-4.07-1.11l-.29-.17-3 .8.8-2.92-.18-.3A8 8 0 1112 20z" />
              </svg>
              WhatsApp direto
            </WhatsAppCTA>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 btn-outline-light px-6 py-3 rounded-full font-medium"
            >
              Conhecer as áreas
            </a>
          </div>
        </div>

        <div className="md:col-span-5 hidden md:block">
          <div
            className="aspect-[4/5] rounded-2xl overflow-hidden border shadow-2xl relative bg-dark flex items-center justify-center p-12"
            style={{
              borderColor: "var(--accent)",
              borderWidth: "1px",
            }}
          >
            <Image
              src="/images/logo-np.png"
              alt="Nogueira Porto Advocacia"
              width={280}
              height={280}
              priority
              className="hero-logo w-full h-auto max-w-[280px]"
              style={{
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.4))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
