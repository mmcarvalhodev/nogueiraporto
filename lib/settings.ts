import { sql } from "./db";

export type Palette = "navy" | "emerald" | "black";
export type HeroMode = "logo" | "image";
export type HeroEntrance =
  | "none"
  | "fade"
  | "slide"
  | "zoom"
  | "rotate"
  | "spin";
export type HeroIdle = "none" | "float" | "pulse" | "slowrotate";

export type SiteSettings = {
  palette: Palette;
  heroMode: HeroMode;
  heroImageUrl: string;
  heroLogoEntrance: HeroEntrance;
  heroLogoIdle: HeroIdle;
  heroEyebrow: string;
  heroHeading: string;
  heroDescription: string;
  instagramUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  trustBar1Label: string;
  trustBar1Value: string;
  trustBar2Label: string;
  trustBar2Value: string;
  trustBar3Label: string;
  trustBar3Value: string;
  trustBar4Label: string;
  trustBar4Value: string;
};

const DEFAULTS: SiteSettings = {
  palette: "navy",
  heroMode: "logo",
  heroImageUrl: "",
  heroLogoEntrance: "slide",
  heroLogoIdle: "none",
  heroEyebrow: "Advocacia · Niterói e Vila Velha",
  heroHeading:
    "Direito Imobiliário,\ncom tradição\n*registral e notarial*.",
  heroDescription:
    "Banca especializada em direito imobiliário, registral e notarial, com atuação judicial e extrajudicial em RJ e ES. Atendimento direto com os sócios.",
  instagramUrl: "",
  facebookUrl: "",
  linkedinUrl: "",
  trustBar1Label: "Inscritos",
  trustBar1Value: "OAB/RJ · OAB/ES",
  trustBar2Label: "Equipe",
  trustBar2Value: "4 Advogados",
  trustBar3Label: "Atuação",
  trustBar3Value: "Niterói · Saquarema · Vila Velha",
  trustBar4Label: "Foco principal",
  trustBar4Value: "Imobiliário",
};

const KEY_MAP = {
  palette: "palette",
  heroMode: "hero_mode",
  heroImageUrl: "hero_image_url",
  heroLogoEntrance: "hero_logo_entrance",
  heroLogoIdle: "hero_logo_idle",
  heroEyebrow: "hero_eyebrow",
  heroHeading: "hero_heading",
  heroDescription: "hero_description",
  instagramUrl: "instagram_url",
  facebookUrl: "facebook_url",
  linkedinUrl: "linkedin_url",
  trustBar1Label: "trust_bar_1_label",
  trustBar1Value: "trust_bar_1_value",
  trustBar2Label: "trust_bar_2_label",
  trustBar2Value: "trust_bar_2_value",
  trustBar3Label: "trust_bar_3_label",
  trustBar3Value: "trust_bar_3_value",
  trustBar4Label: "trust_bar_4_label",
  trustBar4Value: "trust_bar_4_value",
} as const;

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const rows = (await sql`SELECT key, value FROM settings`) as {
      key: string;
      value: string;
    }[];
    const map = new Map<string, string>();
    for (const r of rows) map.set(r.key, r.value);

    return {
      palette: (map.get(KEY_MAP.palette) as Palette) || DEFAULTS.palette,
      heroMode: (map.get(KEY_MAP.heroMode) as HeroMode) || DEFAULTS.heroMode,
      heroImageUrl: map.get(KEY_MAP.heroImageUrl) || DEFAULTS.heroImageUrl,
      heroLogoEntrance:
        (map.get(KEY_MAP.heroLogoEntrance) as HeroEntrance) ||
        DEFAULTS.heroLogoEntrance,
      heroLogoIdle:
        (map.get(KEY_MAP.heroLogoIdle) as HeroIdle) || DEFAULTS.heroLogoIdle,
      heroEyebrow: map.get(KEY_MAP.heroEyebrow) || DEFAULTS.heroEyebrow,
      heroHeading: map.get(KEY_MAP.heroHeading) || DEFAULTS.heroHeading,
      heroDescription:
        map.get(KEY_MAP.heroDescription) || DEFAULTS.heroDescription,
      instagramUrl: map.get(KEY_MAP.instagramUrl) ?? DEFAULTS.instagramUrl,
      facebookUrl: map.get(KEY_MAP.facebookUrl) ?? DEFAULTS.facebookUrl,
      linkedinUrl: map.get(KEY_MAP.linkedinUrl) ?? DEFAULTS.linkedinUrl,
      trustBar1Label:
        map.get(KEY_MAP.trustBar1Label) || DEFAULTS.trustBar1Label,
      trustBar1Value:
        map.get(KEY_MAP.trustBar1Value) || DEFAULTS.trustBar1Value,
      trustBar2Label:
        map.get(KEY_MAP.trustBar2Label) || DEFAULTS.trustBar2Label,
      trustBar2Value:
        map.get(KEY_MAP.trustBar2Value) || DEFAULTS.trustBar2Value,
      trustBar3Label:
        map.get(KEY_MAP.trustBar3Label) || DEFAULTS.trustBar3Label,
      trustBar3Value:
        map.get(KEY_MAP.trustBar3Value) || DEFAULTS.trustBar3Value,
      trustBar4Label:
        map.get(KEY_MAP.trustBar4Label) || DEFAULTS.trustBar4Label,
      trustBar4Value:
        map.get(KEY_MAP.trustBar4Value) || DEFAULTS.trustBar4Value,
    };
  } catch (err) {
    console.error(
      "[settings] erro ao ler do DB, caindo pros defaults:",
      err
    );
    return DEFAULTS;
  }
}

export async function updateSiteSettings(
  patch: Partial<SiteSettings>
): Promise<void> {
  const updates: { key: string; value: string }[] = [];

  if (patch.palette !== undefined)
    updates.push({ key: KEY_MAP.palette, value: patch.palette });
  if (patch.heroMode !== undefined)
    updates.push({ key: KEY_MAP.heroMode, value: patch.heroMode });
  if (patch.heroImageUrl !== undefined)
    updates.push({ key: KEY_MAP.heroImageUrl, value: patch.heroImageUrl });
  if (patch.heroLogoEntrance !== undefined)
    updates.push({
      key: KEY_MAP.heroLogoEntrance,
      value: patch.heroLogoEntrance,
    });
  if (patch.heroLogoIdle !== undefined)
    updates.push({ key: KEY_MAP.heroLogoIdle, value: patch.heroLogoIdle });
  if (patch.heroEyebrow !== undefined)
    updates.push({ key: KEY_MAP.heroEyebrow, value: patch.heroEyebrow });
  if (patch.heroHeading !== undefined)
    updates.push({ key: KEY_MAP.heroHeading, value: patch.heroHeading });
  if (patch.heroDescription !== undefined)
    updates.push({
      key: KEY_MAP.heroDescription,
      value: patch.heroDescription,
    });
  if (patch.instagramUrl !== undefined)
    updates.push({ key: KEY_MAP.instagramUrl, value: patch.instagramUrl });
  if (patch.facebookUrl !== undefined)
    updates.push({ key: KEY_MAP.facebookUrl, value: patch.facebookUrl });
  if (patch.linkedinUrl !== undefined)
    updates.push({ key: KEY_MAP.linkedinUrl, value: patch.linkedinUrl });
  if (patch.trustBar1Label !== undefined)
    updates.push({ key: KEY_MAP.trustBar1Label, value: patch.trustBar1Label });
  if (patch.trustBar1Value !== undefined)
    updates.push({ key: KEY_MAP.trustBar1Value, value: patch.trustBar1Value });
  if (patch.trustBar2Label !== undefined)
    updates.push({ key: KEY_MAP.trustBar2Label, value: patch.trustBar2Label });
  if (patch.trustBar2Value !== undefined)
    updates.push({ key: KEY_MAP.trustBar2Value, value: patch.trustBar2Value });
  if (patch.trustBar3Label !== undefined)
    updates.push({ key: KEY_MAP.trustBar3Label, value: patch.trustBar3Label });
  if (patch.trustBar3Value !== undefined)
    updates.push({ key: KEY_MAP.trustBar3Value, value: patch.trustBar3Value });
  if (patch.trustBar4Label !== undefined)
    updates.push({ key: KEY_MAP.trustBar4Label, value: patch.trustBar4Label });
  if (patch.trustBar4Value !== undefined)
    updates.push({ key: KEY_MAP.trustBar4Value, value: patch.trustBar4Value });

  for (const { key, value } of updates) {
    await sql`
      INSERT INTO settings (key, value, updated_at)
      VALUES (${key}, ${value}, NOW())
      ON CONFLICT (key) DO UPDATE
        SET value = EXCLUDED.value, updated_at = NOW()
    `;
  }
}
