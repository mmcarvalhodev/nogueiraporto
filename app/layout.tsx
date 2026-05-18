import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { getSiteSettings } from "@/lib/settings";
import { site } from "@/lib/site";
import "./globals.css";

// Páginas públicas usam ISR (revalida em até 60s após mudança no admin).
// O admin invoca revalidatePath() ao salvar, então a alteração propaga
// imediatamente. Os 60s são um fallback caso a invalidação manual falhe.
// Antes era `force-dynamic`, mas isso gerava 1 function invocation por
// pageview — estourava o free tier do Netlify em poucas horas com bots.
export const revalidate = 60;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Banca de advocacia especializada em direito imobiliário, registral e notarial. Atuação judicial e extrajudicial em Niterói (RJ) e Vila Velha (ES). Atendimento direto com os sócios.",
  keywords: [
    "advogado imobiliário",
    "direito imobiliário",
    "advogado Niterói",
    "advogado Vila Velha",
    "usucapião",
    "inventário extrajudicial",
    "regularização de imóvel",
    "advocacia notarial",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Banca especializada em direito imobiliário, registral e notarial. Niterói e Vila Velha.",
    images: [
      {
        url: "/images/logo-np.png",
        width: 810,
        height: 810,
        alt: `${site.name} · Advocacia Imobiliária, Registral e Notarial`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Banca especializada em direito imobiliário, registral e notarial.",
    images: ["/images/logo-np.png"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="pt-BR"
      data-palette={settings.palette}
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
