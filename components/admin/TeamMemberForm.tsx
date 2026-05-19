import Link from "next/link";
import ImageUpload from "./ImageUpload";
import type { TeamMember } from "@/lib/team";

type Props = {
  action: (formData: FormData) => Promise<void>;
  member?: TeamMember;
  cancelHref: string;
  submitLabel: string;
};

export default function TeamMemberForm({
  action,
  member,
  cancelHref,
  submitLabel,
}: Props) {
  return (
    <form
      action={action}
      className="space-y-6 rounded-2xl border bg-page p-6 md:p-8"
      style={{ borderColor: "var(--border-soft)" }}
    >
      {member && <input type="hidden" name="id" value={member.id} />}

      {/* Foto */}
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--bg-dark)" }}
        >
          Foto{" "}
          <span
            className="font-normal text-dark"
            style={{ opacity: 0.6 }}
          >
            (opcional — sem foto, mostra as iniciais)
          </span>
        </label>
        <ImageUpload
          name="photoUrl"
          context="team"
          aspectRatio="square"
          defaultValue={member?.photoUrl ?? ""}
          label="Selecionar foto"
        />
      </div>

      {/* Nome + Cargo */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--bg-dark)" }}
          >
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={member?.name ?? ""}
            placeholder="Ex: Fabiano Nogueira Porto"
            className="block w-full rounded-lg border px-3 py-2 text-sm"
            style={{
              borderColor: "var(--border-soft)",
              background: "white",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--bg-dark)" }}
          >
            Cargo / Função
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            defaultValue={member?.role ?? ""}
            placeholder="Ex: Sócio fundador, Advogada, Assistente Jurídica"
            className="block w-full rounded-lg border px-3 py-2 text-sm"
            style={{
              borderColor: "var(--border-soft)",
              background: "white",
            }}
          />
        </div>
      </div>

      {/* OAB */}
      <div>
        <label
          htmlFor="oabCredentials"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--bg-dark)" }}
        >
          Credenciais OAB{" "}
          <span
            className="font-normal text-dark"
            style={{ opacity: 0.6 }}
          >
            (uma por linha — deixe vazio se for equipe de apoio sem OAB)
          </span>
        </label>
        <textarea
          id="oabCredentials"
          name="oabCredentials"
          rows={3}
          defaultValue={member?.oabCredentials.join("\n") ?? ""}
          placeholder="OAB/RJ 136.764&#10;OAB/ES 40.045"
          className="block w-full rounded-lg border px-3 py-2 text-sm font-mono"
          style={{
            borderColor: "var(--border-soft)",
            background: "white",
          }}
        />
      </div>

      {/* Bio + Iniciais */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label
            htmlFor="bio"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--bg-dark)" }}
          >
            Bio curta{" "}
            <span
              className="font-normal text-dark"
              style={{ opacity: 0.6 }}
            >
              (1-2 linhas, aparece no card)
            </span>
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={2}
            defaultValue={member?.bio ?? ""}
            placeholder="Ex: Atendimento ao cliente, organização de processos..."
            className="block w-full rounded-lg border px-3 py-2 text-sm"
            style={{
              borderColor: "var(--border-soft)",
              background: "white",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="initials"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--bg-dark)" }}
          >
            Iniciais{" "}
            <span
              className="font-normal text-dark"
              style={{ opacity: 0.6 }}
            >
              (opcional)
            </span>
          </label>
          <input
            id="initials"
            name="initials"
            type="text"
            maxLength={4}
            defaultValue={member?.initials ?? ""}
            placeholder="FP"
            className="block w-full rounded-lg border px-3 py-2 text-sm uppercase"
            style={{
              borderColor: "var(--border-soft)",
              background: "white",
            }}
          />
          <p className="text-[11px] text-dark mt-1" style={{ opacity: 0.6 }}>
            Se vazio, calcula automático a partir do nome.
          </p>
        </div>
      </div>

      {/* Detalhes (hover/modal) */}
      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--bg-dark)" }}
        >
          Detalhes adicionais{" "}
          <span
            className="font-normal text-dark"
            style={{ opacity: 0.6 }}
          >
            (aparece ao passar o mouse / tocar no card no site público)
          </span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={8}
          defaultValue={member?.details ?? ""}
          placeholder={
            "Especializações, formação acadêmica, experiência destacada, línguas faladas, setores atendidos.\n\nEx:\n• Pós-graduado em Direito Civil pela FGV\n• Mestre em Direito Notarial\n• Atuação em causas complexas de inventário\n• Idiomas: inglês e espanhol"
          }
          className="block w-full rounded-lg border px-3 py-2 text-sm"
          style={{
            borderColor: "var(--border-soft)",
            background: "white",
          }}
        />
        <p
          className="text-[11px] text-dark mt-1.5 leading-relaxed"
          style={{ opacity: 0.6 }}
        >
          Texto livre. Quebras de linha são preservadas. Use linhas começando
          com <code>•</code> ou <code>-</code> para virar lista. Deixe vazio
          para não mostrar o popover.
        </p>
      </div>

      {/* Ordem + Ativo */}
      <div className="grid sm:grid-cols-3 gap-4 items-end">
        <div>
          <label
            htmlFor="displayOrder"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--bg-dark)" }}
          >
            Ordem de exibição
          </label>
          <input
            id="displayOrder"
            name="displayOrder"
            type="number"
            min="0"
            defaultValue={member?.displayOrder ?? 999}
            className="block w-full rounded-lg border px-3 py-2 text-sm"
            style={{
              borderColor: "var(--border-soft)",
              background: "white",
            }}
          />
          <p className="text-[11px] text-dark mt-1" style={{ opacity: 0.6 }}>
            Menor número aparece primeiro.
          </p>
        </div>

        <div className="sm:col-span-2 flex items-center pt-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="isActive"
              defaultChecked={member?.isActive ?? true}
              className="w-4 h-4 accent-amber-500"
            />
            <span className="text-sm" style={{ color: "var(--bg-dark)" }}>
              Mostrar no site (ativo)
            </span>
          </label>
        </div>
      </div>

      {/* Ações */}
      <div
        className="flex items-center justify-end gap-3 border-t pt-5"
        style={{ borderColor: "var(--border-soft)" }}
      >
        <Link
          href={cancelHref}
          className="rounded border px-4 py-2 text-sm hover:bg-page-2"
          style={{ borderColor: "var(--border-soft)" }}
        >
          Cancelar
        </Link>
        <button
          type="submit"
          className="rounded btn-dark px-4 py-2 text-sm font-medium"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
