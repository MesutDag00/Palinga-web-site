import Link from "next/link";
import { Container } from "@/components/Container";

const faqs = [
  {
    q: "Aphasia Reverbis nedir?",
    a: "Aphasia Reverbis, dijital afazi rehabilitasyon platformudur.",
  },
  {
    q: "Kimler kullanabilir?",
    a: "Afazi hastaları ve uzman dil-konuşma terapistleri kullanabilir.",
  },
  {
    q: "Verilerim güvende mi?",
    a: "Evet. Verileriniz yüksek güvenlikli bulut altyapısı ve KVKK uyumuyla korunmaktadır.",
  },
  {
    q: "Ücretli mi?",
    a: "Platformun kurumsal ve bireysel kullanım modelleri mevcuttur.",
  },
];

export default function SssPage() {
  return (
    <div className="bg-white text-slate-800">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl font-sans">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← Ana Sayfaya Dön
          </Link>

          <h1 className="mb-8 mt-6 text-4xl font-bold">Sıkça Sorulan Sorular</h1>

          <div className="space-y-6">
            {faqs.map((item) => (
              <section key={item.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-semibold">{item.q}</h2>
                <p className="text-base leading-relaxed text-slate-700">{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}


