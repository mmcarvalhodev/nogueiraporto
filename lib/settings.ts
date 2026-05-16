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
};

const DEFAULTS: SiteSettings = {
  palette: "navy",
  heroMode: "logo",
  heroImageUrl: "",
  heroLogoEntrance: "slide",
  heroLogoIdle: "none",
};

const KEY_MAP = {
  palette: "palette",
  heroMode: "hero_mode",
  heroImageUrl: "hero_image_url",
  heroLogoEntrance: "hero_logo_entrance",
  heroLogoIdle: "hero_logo_idle",
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

  for (const { key, value } of updates) {
    await sql`
      INSERT INTO settings (key, value, updated_at)
      VALUES (${key}, ${value}, NOW())
      ON CONFLICT (key) DO UPDATE
        SET value = EXCLUDED.value, updated_at = NOW()
    `;
  }
}
