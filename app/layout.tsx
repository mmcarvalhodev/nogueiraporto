import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import PaletteSwitcher from "@/components/PaletteSwitcher";
import LogoEffectControl from "@/components/LogoEffectControl";
import { site } from "@/lib/site";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Banca especializada em direito imobiliário, registral e notarial.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-palette="navy"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsapp />
        {/* Controles temporários — vão sair quando o admin substituir (Fase 2) */}
        <LogoEffectControl />
        <PaletteSwitcher />
      </body>
    </html>
  );
}
