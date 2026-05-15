import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      className="bg-darkest border-t text-light-soft text-sm"
      style={{ borderColor: "var(--border-soft-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/images/logo-np.png"
            alt="Nogueira Porto Advocacia"
            width={160}
            height={80}
            className="h-20 w-auto mb-4"
          />
          <p className="leading-relaxed">
            Banca de advocacia especializada em direito imobiliário, registral
            e notarial. Atendimento em Niterói e Vila Velha.
          </p>
        </div>

        <div>
          <div className="text-light font-medium mb-3">Credenciais</div>
          <ul className="space-y-1 text-xs">
            {site.oab.rj.map((n) => (
              <li key={`rj-${n}`}>OAB/RJ {n}</li>
            ))}
            {site.oab.es.map((n) => (
              <li key={`es-${n}`}>OAB/ES {n}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-light font-medium mb-3">Contato</div>
          <ul className="space-y-1">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-accent"
              >
                {site.email}
              </a>
            </li>
            {site.offices.map((o) => (
              <li key={o.id}>
                {o.whatsapp.display} · {o.city}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--border-soft-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs flex flex-wrap gap-3 justify-between text-light-soft-2">
          <span>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </span>
          <span>nogueiraporto.adv.br</span>
        </div>
      </div>
    </footer>
  );
}
