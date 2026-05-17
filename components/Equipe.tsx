import Image from "next/image";
import { getActiveTeam } from "@/lib/team";

export default async function Equipe() {
  const team = await getActiveTeam();

  return (
    <section id="equipe" className="py-16 md:py-24 bg-page-2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
            A banca
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ color: "var(--bg-dark)" }}
          >
            Quem cuida do seu caso
          </h2>
          <div className="gold-rule w-24 mx-auto mb-3" />
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed text-dark"
          >
            Equipe estruturada com sócios titulares, advogados associados e
            equipe de apoio dedicada — todos com atendimento direto ao cliente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((m) => (
            <article
              key={m.id}
              className="card-hover rounded-2xl overflow-hidden border bg-page"
              style={{ borderColor: "var(--border-soft)" }}
            >
              <div
                className="aspect-[3/4] grid place-items-center relative"
                style={{ background: "var(--bg-dark)" }}
              >
                {m.photoUrl ? (
                  <Image
                    src={m.photoUrl}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover"
                  />
                ) : (
                  <div className="font-serif text-6xl text-accent">
                    {m.initials || m.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5">
                  {m.role}
                </div>
                <h3
                  className="font-serif text-xl mb-2"
                  style={{ color: "var(--bg-dark)" }}
                >
                  {m.name}
                </h3>
                {m.oabCredentials.length > 0 ? (
                  <div
                    className="text-xs leading-relaxed border-t pt-3 mt-3 text-dark"
                    style={{ borderColor: "var(--border-soft)" }}
                  >
                    {m.oabCredentials.map((credential) => (
                      <div
                        key={credential}
                        className="text-accent font-medium mb-0.5"
                      >
                        {credential}
                      </div>
                    ))}
                  </div>
                ) : m.bio ? (
                  <div className="text-xs leading-relaxed pt-3 text-dark">
                    {m.bio}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
