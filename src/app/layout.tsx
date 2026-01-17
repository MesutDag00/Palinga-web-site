import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Aphasia Reverbis | Terapist KontrollÃ¼ Dijital Rehabilitasyon",
  description:
    "TÃ¼rkiyeâ€™nin ilk terapist kontrollÃ¼ afazi rehabilitasyon platformu. TÃœBÄ°TAK 1812 destekli veri odaklÄ± Ã§Ã¶zÃ¼m.",
  openGraph: {
    title: "Aphasia Reverbis | Terapist KontrollÃ¼ Dijital Rehabilitasyon",
    description:
      "TÃ¼rkiyeâ€™nin ilk terapist kontrollÃ¼ afazi rehabilitasyon platformu. TÃœBÄ°TAK 1812 destekli veri odaklÄ± Ã§Ã¶zÃ¼m.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aphasia Reverbis | Terapist KontrollÃ¼ Dijital Rehabilitasyon",
    description:
      "TÃ¼rkiyeâ€™nin ilk terapist kontrollÃ¼ afazi rehabilitasyon platformu. TÃœBÄ°TAK 1812 destekli veri odaklÄ± Ã§Ã¶zÃ¼m.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-dvh">
        <Header />
        <main id="content" className="min-h-[calc(100dvh-4rem)]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

