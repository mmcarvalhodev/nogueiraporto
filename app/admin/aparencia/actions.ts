"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import {
  updateSiteSettings,
  type Palette,
  type HeroMode,
  type HeroEntrance,
  type HeroIdle,
} from "@/lib/settings";

const PALETTES: Palette[] = ["navy", "emerald", "black"];
const HERO_MODES: HeroMode[] = ["logo", "image"];
const ENTRANCES: HeroEntrance[] = [
  "none",
  "fade",
  "slide",
  "zoom",
  "rotate",
  "spin",
];
const IDLES: HeroIdle[] = ["none", "float", "pulse", "slowrotate"];

export async function saveAppearance(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const palette = String(formData.get("palette") ?? "") as Palette;
  const heroMode = String(formData.get("heroMode") ?? "") as HeroMode;
  const heroImageUrl = String(formData.get("heroImageUrl") ?? "").trim();
  const heroLogoEntrance = String(
    formData.get("heroLogoEntrance") ?? ""
  ) as HeroEntrance;
  const heroLogoIdle = String(formData.get("heroLogoIdle") ?? "") as HeroIdle;
  const heroEyebrow = String(formData.get("heroEyebrow") ?? "").trim();
  const heroHeading = String(formData.get("heroHeading") ?? "").trim();
  const heroDescription = String(formData.get("heroDescription") ?? "").trim();
  const instagramUrl = String(formData.get("instagramUrl") ?? "").trim();
  const facebookUrl = String(formData.get("facebookUrl") ?? "").trim();
  const linkedinUrl = String(formData.get("linkedinUrl") ?? "").trim();
  const trustBar1Label = String(formData.get("trustBar1Label") ?? "").trim();
  const trustBar1Value = String(formData.get("trustBar1Value") ?? "").trim();
  const trustBar2Label = String(formData.get("trustBar2Label") ?? "").trim();
  const trustBar2Value = String(formData.get("trustBar2Value") ?? "").trim();
  const trustBar3Label = String(formData.get("trustBar3Label") ?? "").trim();
  const trustBar3Value = String(formData.get("trustBar3Value") ?? "").trim();
  const trustBar4Label = String(formData.get("trustBar4Label") ?? "").trim();
  const trustBar4Value = String(formData.get("trustBar4Value") ?? "").trim();

  if (!PALETTES.includes(palette)) {
    redirect("/admin/aparencia?error=palette");
  }
  if (!HERO_MODES.includes(heroMode)) {
    redirect("/admin/aparencia?error=heroMode");
  }
  if (!ENTRANCES.includes(heroLogoEntrance)) {
    redirect("/admin/aparencia?error=entrance");
  }
  if (!IDLES.includes(heroLogoIdle)) {
    redirect("/admin/aparencia?error=idle");
  }

  await updateSiteSettings({
    palette,
    heroMode,
    heroImageUrl,
    heroLogoEntrance,
    heroLogoIdle,
    heroEyebrow,
    heroHeading,
    heroDescription,
    instagramUrl,
    facebookUrl,
    linkedinUrl,
    trustBar1Label,
    trustBar1Value,
    trustBar2Label,
    trustBar2Value,
    trustBar3Label,
    trustBar3Value,
    trustBar4Label,
    trustBar4Value,
  });

  revalidatePath("/", "layout");
  redirect("/admin/aparencia?saved=1");
}
