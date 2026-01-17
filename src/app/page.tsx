import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { BadgeCheckIcon, TrophyIcon } from "@/components/Icons";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

type PartnerLogo = {
  src: string;
  alt: string;
};

const publicFileExists = (publicRelativePath: string) =>
  existsSync(path.join(process.cwd(), "public", publicRelativePath));

const partnerLogos: PartnerLogo[] = (() => {
  const logos: PartnerLogo[] = [];

  // Prefer the combined "Bakanlık + TÜBİTAK" logo if present.
  if (publicFileExists("images/tubitak logo.jpg")) {
    logos.push({
      src: "/images/tubitak logo.jpg",
      alt: "T.C. Sanayi ve Teknoloji Bakanlığı & TÜBİTAK",
    });
  } else {
    if (publicFileExists("images/sanayi.jpg")) {
      logos.push({ src: "/images/sanayi.jpg", alt: "T.C. Sanayi ve Teknoloji Bakanlığı" });
    }
    if (publicFileExists("images/tubitak.jpg")) {
      logos.push({ src: "/images/tubitak.jpg", alt: "TÜBİTAK" });
    }
  }

  // Prefer the WhatsApp-named PALINGA logo if present.
  if (publicFileExists("images/WhatsApp Image 2025-12-27 at 22.35.04.jpeg")) {
    logos.push({ src: "/images/WhatsApp Image 2025-12-27 at 22.35.04.jpeg", alt: "PALINGA" });
  } else if (publicFileExists("images/palinga-logo.jpeg")) {
    logos.push({ src: "/images/palinga-logo.jpeg", alt: "PALINGA" });
  }

  return logos;
})();

export default function Home() {
  return (
    <div className="bg-clean-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(0,82,204,0.14),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(0,163,191,0.12),transparent_50%)]" />

        <Container className="relative py-12 sm:py-16 lg:py-20">
          <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-bold leading-tight text-ink-black sm:text-5xl">
                <span className="text-trust-blue">Aphasia Reverbis</span>
              </h1>
              <p className="max-w-xl text-lg text-soft-gray">
                TÜBİTAK destekli, terapist kontrollü ve veri odaklı yeni nesil rehabilitasyon ekosistemi.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/solution" variant="primary" className="w-full sm:w-auto">
                  Uygulama İçeriği
                </ButtonLink>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-black ring-1 ring-soft-line">
                  <span className="inline-flex h-5 w-5 items-center justify-center text-trust-blue" aria-hidden="true">
                    <BadgeCheckIcon />
                  </span>
                  TÜBİTAK 1812 Destekli
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-black ring-1 ring-soft-line">
                  <span className="inline-flex h-5 w-5 items-center justify-center text-healing-teal" aria-hidden="true">
                    <TrophyIcon />
                  </span>
                  IDEATHON 2025 Birincisi
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:justify-self-end">
              <div className="card card-hover mx-auto max-w-md p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="min-w-0 flex-1 text-sm font-semibold leading-tight text-ink-black">
                    Günlük Konuşma Egzersizi
                  </div>
                  <div className="badge shrink-0 text-xs">
                    <span className="inline-flex h-2 w-2 rounded-full bg-healing-teal" aria-hidden="true" />
                    Demo Arayüz
                  </div>
                </div>
                <div className="mt-4 rounded-[2rem] bg-ink-black p-2 shadow-soft-sm">
                  <div className="relative h-[460px] overflow-hidden rounded-[1.6rem] bg-slate-50">
                    <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-black/90" />
                    <div className="absolute inset-0 flex flex-col px-4 pb-4 pt-10">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-semibold text-slate-500">Merhaba,</div>
                          <div className="text-lg font-bold text-ink-black">Ahmet 👋</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-soft-line shadow-soft-sm"
                            aria-label="Bildirimler"
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                            </svg>
                          </button>
                          <div className="h-10 w-10 overflow-hidden rounded-2xl bg-[radial-gradient(120%_120%_at_30%_20%,rgba(0,82,204,0.18),rgba(0,163,191,0.10),transparent_70%)] ring-1 ring-soft-line shadow-soft-sm">
                            <div className="grid h-full w-full place-items-center text-sm font-bold text-trust-blue">
                              A
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hero Card */}
                      <div className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-trust-blue via-[#2C7BE5] to-healing-teal p-6 text-white shadow-soft-sm">
                        <div className="flex flex-row items-center justify-between gap-6">
                          <div className="flex min-w-0 flex-1 flex-col items-start pr-6">
                            <div className="text-base font-bold leading-tight text-white whitespace-nowrap">
                              Bugünkü Hedefin
                            </div>
                            <div className="mt-2 text-sm font-semibold text-white/85">
                              Harika gidiyorsun! Seriyi bozma.
                            </div>
                          </div>

                          <div className="relative h-16 w-16 shrink-0">
                            {(() => {
                              const progress = 65;
                              const r = 18;
                              const c = 2 * Math.PI * r;
                              const dash = (progress / 100) * c;
                              return (
                                <svg aria-hidden="true" viewBox="0 0 44 44" className="h-16 w-16 -rotate-90">
                                  <circle cx="22" cy="22" r={r} stroke="rgba(255,255,255,0.30)" strokeWidth="6" fill="none" />
                                  <circle
                                    cx="22"
                                    cy="22"
                                    r={r}
                                    stroke="rgba(255,255,255,0.95)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    fill="none"
                                    strokeDasharray={`${dash} ${c - dash}`}
                                  />
                                </svg>
                              );
                            })()}
                            <div className="absolute inset-0 grid place-items-center text-sm font-bold">
                              65%
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Exercises */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-bold text-ink-black">Önerilen Egzersizler</div>
                          <div className="text-xs font-semibold text-slate-500">4 görev</div>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {[
                            {
                              title: "Kelime Eşleştirme",
                              tone: "bg-orange-50 text-orange-600 ring-orange-100",
                              icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M14 7h-4a3 3 0 0 0-3 3v4" />
                                  <path d="M10 17h4a3 3 0 0 0 3-3v-4" />
                                  <path d="M8 6l2-2 2 2" />
                                  <path d="M16 18l-2 2-2-2" />
                                </svg>
                              ),
                            },
                            {
                              title: "Sesli Telaffuz",
                              tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
                              icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
                                  <path d="M19 11a7 7 0 0 1-14 0" />
                                  <path d="M12 19v3" />
                                </svg>
                              ),
                            },
                            {
                              title: "Nesne Tanıma",
                              tone: "bg-blue-50 text-trust-blue ring-blue-100",
                              icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M3 7h4l2-2h6l2 2h4v12H3V7z" />
                                  <circle cx="12" cy="13" r="3" />
                                </svg>
                              ),
                            },
                            {
                              title: "Hafıza Kartları",
                              tone: "bg-purple-50 text-purple-600 ring-purple-100",
                              icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="4" y="6" width="14" height="14" rx="2" />
                                  <path d="M8 6V4h10v12h-2" />
                                </svg>
                              ),
                            },
                          ].map((b) => (
                            <button
                              key={b.title}
                              type="button"
                              className="group rounded-2xl bg-white p-4 text-left shadow-soft-sm ring-1 ring-soft-line transition hover:-translate-y-0.5 hover:shadow-soft"
                            >
                              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ${b.tone}`}>
                                {b.icon}
                              </div>
                              <div className="mt-3 text-sm font-semibold text-ink-black">{b.title}</div>
                              <div className="mt-1 text-xs font-semibold text-slate-500">Hızlı başlat</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="mt-auto pt-4">
                        <div className="rounded-2xl bg-white p-2 shadow-soft-sm ring-1 ring-soft-line">
                          <div className="grid grid-cols-3">
                            {[
                              { label: "Ana Sayfa", active: true, icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M3 11l9-8 9 8" />
                                  <path d="M9 22V12h6v10" />
                                </svg>
                              ) },
                              { label: "İstatistik", active: false, icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M3 3v18h18" />
                                  <path d="M7 14v4" />
                                  <path d="M12 10v8" />
                                  <path d="M17 6v12" />
                                </svg>
                              ) },
                              { label: "Profil", active: false, icon: (
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                              ) },
                            ].map((n) => (
                              <button
                                key={n.label}
                                type="button"
                                aria-label={n.label}
                                className={[
                                  "flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-xs font-semibold transition",
                                  n.active ? "text-trust-blue" : "text-slate-500 hover:text-slate-700",
                                ].join(" ")}
                              >
                                {n.icon}
                                <span className="sr-only">{n.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 sm:mt-10 rounded-lg bg-white p-5 ring-1 ring-soft-line shadow-soft-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xl font-bold text-ink-black">
                  İnme sonrası afazi yükü yüksek; uzman erişimi sınırlı.
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-clean-white px-4 py-3 ring-1 ring-soft-line">
                  <div className="text-2xl font-bold text-trust-blue">%35</div>
                  <div className="text-sm font-semibold text-soft-gray">Türkiye’de inme sonrası afazi oranı</div>
                </div>
                <div className="rounded-lg bg-clean-white px-4 py-3 ring-1 ring-soft-line">
                  <div className="text-2xl font-bold text-trust-blue">9.500</div>
                  <div className="text-sm font-semibold text-soft-gray">Terapist kapasitesi / yetersizlik baskısı</div>
                </div>
              </div>
            </div>
          </div>

          <section aria-label="Başarı Hikayesi" className="mt-10 sm:mt-12">
            <div className="rounded-3xl bg-slate-50 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="mx-auto max-w-2xl text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-trust-blue">IDEATHON 2025</div>
                    <p className="text-xl leading-relaxed text-slate-800 text-pretty">
                      Şubat 2025 itibarıyla aynı akademik disiplinden gelen beş ortaklı bir yapı kurarak afazi rehabilitasyonuna yönelik teknolojik çözümümüzün ilk adımlarını attık ve Haziran ayına kadar devam eden AR-GE çalışmalarıyla uygulamanın temellerini oluşturduk. Üniversitemiz bünyesindeki ilk değerlendirmede 100 üzerinden 92 puan alarak teknik yeterliliğimizi kanıtladıktan sonra, final aşamasında vizyonumuzu jüri heyetine sunup 80 puanla genel klasman birincisi seçilerek yetkililer tarafından TÜBİTAK BİGG 1812 programı için stratejik tavsiye aldık. Elde ettiğimiz bu akademik onayı ve stratejik tavsiyeleri yasal bir güvence altına almak amacıyla da kazandığımız ilk ödülü doğrudan Fikri Patent Başvurusu süreçlerinde değerlendirerek PALINGA Yazılım A.Ş. vizyonunu somutlaştırdık.
                    </p>
                  </div>
                </div>
                <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl bg-white ring-1 ring-soft-line">
                  <Image
                    src="/images/IDEATHON-Main.jpg"
                    alt="IDEATHON 2025"
                    width={1600}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                    priority
                  />
                </figure>
              </div>
            </div>
          </section>

          <section aria-label="Success Story" className="mt-6 sm:mt-8">
            <div className="rounded-3xl bg-slate-50 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/Beginer.jpeg"
                      alt="TÜBİTAK BİGG 1812 & Kuruluş"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </figure>

                <div className="mx-auto max-w-2xl text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-trust-blue">TÜBİTAK BİGG 1812 &amp; KURULUŞ</div>
                    <p className="text-xl leading-relaxed text-slate-800 text-pretty">
                      Ideathon başarısının ardından projemizi ulusal ölçeğe taşımak adına başvurduğumuz TÜBİTAK BİGG 1812 programında, ilk etabı başarıyla geçerek ikinci aşamaya kalmaya hak kazandık. Beş ay süren bu yoğun maratonda, detaylı teknik dosya hazırlıkları ve jüri sunumlarının ardından 1,5 aylık kritik değerlendirme sürecini Mükemmeliyet Mührü alarak taçlandırdık. Türkiye genelinde desteklenmeye değer görülen 107 seçkin projeden biri olarak, aldığımız yatırımla 09.01.2026 tarihinde şirketimizi resmen kurduk ve teknolojimizi profesyonel bir kimliğe kavuşturduk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Paydaşlarımız ve İş Ortaklarımız" className="mt-10 sm:mt-12">
            <div className="space-y-6">
              <h2 className="text-center text-2xl font-bold text-ink-black">Paydaşlarımız ve İş Ortaklarımız</h2>

              <div className="grid place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {partnerLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className="w-full max-w-md rounded-xl bg-white/60 p-6 shadow-soft-sm ring-1 ring-soft-line"
                  >
                    <div className="relative mx-auto h-24 w-full sm:h-28">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                        className="object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
}
