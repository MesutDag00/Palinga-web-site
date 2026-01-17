import { Container } from "@/components/Container";
import {
  WalletIcon,
  UserCheckIcon,
  UsersIcon,
  BarChart3Icon,
  SearchIcon,
  TrendingUpIcon,
} from "@/components/Icons";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PdfReportButton } from "@/components/PdfReportButton";

function Feature({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/70 p-5 shadow-soft-sm ring-1 ring-soft-line/50 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-soft">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(120%_120%_at_30%_20%,rgba(0,82,204,0.18),rgba(0,82,204,0.06),transparent_70%)] text-trust-blue ring-1 ring-trust-blue/15">
          <span className="sr-only">{title}</span>
          {icon}
        </span>
        <div className="space-y-1">
          <div className="text-[17px] font-semibold text-ink-black sm:text-lg">{title}</div>
          <p className="text-[15px] font-medium leading-relaxed text-slate-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function TherapistDashboard() {
  return (
    <div className="relative h-full min-h-[560px] overflow-hidden rounded-3xl bg-white/40 p-6 shadow-soft-sm ring-1 ring-white/70 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(0,82,204,0.14),transparent_55%),radial-gradient(700px_circle_at_90%_20%,rgba(0,163,191,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/55" aria-hidden="true" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-ink-black">Terapist Dashboard</div>
          <div className="mt-1 text-xs font-semibold text-slate-500">Canlı panel • Örnek veri</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <div className="badge bg-white/70 text-xs">Analiz</div>
            <div className="badge bg-white/70 text-xs">Rapor</div>
          </div>
          <PdfReportButton className="sm:ml-2" />
        </div>
      </div>

      <div className="relative mt-5 grid gap-4">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70 lg:col-span-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-ink-black">Hasta Gelişim Grafiği</div>
                <div className="mt-1 text-xs font-semibold text-slate-500">Son 14 gün • Başarı skoru</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-clean-white px-3 py-1.5 ring-1 ring-soft-line/60">
                  <span className="h-2 w-2 rounded-full bg-trust-blue" aria-hidden="true" />
                  Trend: ↑ 12%
                </span>
              </div>
            </div>

            <div className="mt-4">
              <svg className="h-36 w-full" viewBox="0 0 640 220" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(0,82,204,0.95)" />
                    <stop offset="0.6" stopColor="rgba(44,123,229,0.95)" />
                    <stop offset="1" stopColor="rgba(0,163,191,0.95)" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(0,82,204,0.18)" />
                    <stop offset="1" stopColor="rgba(0,82,204,0)" />
                  </linearGradient>
                </defs>

                {/* grid */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M 0 ${30 + i * 40} H 640`}
                    stroke="rgba(148,163,184,0.35)"
                    strokeWidth="1"
                  />
                ))}

                {/* area */}
                <path
                  d="M 24 170 C 90 180, 120 130, 170 140 C 230 150, 250 100, 310 110 C 370 120, 390 70, 450 78 C 510 86, 540 60, 616 46 L 616 220 L 24 220 Z"
                  fill="url(#areaGrad)"
                />
                {/* line */}
                <path
                  d="M 24 170 C 90 180, 120 130, 170 140 C 230 150, 250 100, 310 110 C 370 120, 390 70, 450 78 C 510 86, 540 60, 616 46"
                  stroke="url(#lineGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* end dot */}
                <circle cx="616" cy="46" r="6" fill="white" />
                <circle cx="616" cy="46" r="4" fill="rgba(0,163,191,0.95)" />
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { k: "Bugün", v: "7 dk", hint: "Egzersiz" },
                { k: "Haftalık", v: "+2", hint: "Seans artışı" },
                { k: "Uygunluk", v: "%94", hint: "Program uyumu" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-clean-white/70 p-3 ring-1 ring-soft-line/50">
                  <div className="text-xs font-semibold text-slate-500">{s.k}</div>
                  <div className="mt-1 text-lg font-semibold text-ink-black">{s.v}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">{s.hint}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-ink-black">Zorlanılan Alanlar Analizi</div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">Otomatik özet • Son 7 gün</div>
                </div>
                <div className="text-xs font-semibold text-slate-600">Güncel</div>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  { label: "Kelime Bulma", value: 72 },
                  { label: "Akıcılık", value: 58 },
                  { label: "Anlama", value: 42 },
                  { label: "Tekrar", value: 32 },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[120px_1fr_42px] items-center gap-3">
                    <div className="text-xs font-semibold text-slate-600">{row.label}</div>
                    <div className="h-2.5 rounded-full bg-slate-200/70">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-trust-blue via-[#2C7BE5] to-healing-teal shadow-[0_6px_18px_rgba(0,82,204,0.18)]"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                    <div className="text-right text-xs font-semibold text-slate-600">{row.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-ink-black">Analiz Raporları</div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">PDF/özet çıktıları • 1 tık</div>
                </div>
                <div className="badge bg-white/80 text-xs">Paylaş</div>
              </div>

              <div className="mt-4 grid gap-2">
                {[
                  { title: "Haftalık özet", meta: "7 gün • 12 metrik", tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20" },
                  { title: "Zorlanılan alanlar", meta: "Kategori bazlı", tone: "bg-healing-teal/10 text-healing-teal ring-healing-teal/20" },
                  { title: "Seans uyumu", meta: "Takvim + süre", tone: "bg-slate-100 text-slate-700 ring-slate-200" },
                ].map((r) => (
                  <div key={r.title} className="flex items-center justify-between gap-3 rounded-2xl bg-clean-white/70 px-3 py-2 ring-1 ring-soft-line/50">
                    <div>
                      <div className="text-sm font-semibold text-ink-black">{r.title}</div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-500">{r.meta}</div>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${r.tone}`}>
                      Hazır
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PatientFamilyMotivationPanel() {
  const completed = 12;
  const total = 15;
  const progress = Math.round((completed / total) * 100);
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <div className="relative h-full min-h-[560px] overflow-hidden rounded-3xl bg-white/40 p-6 shadow-soft-sm ring-1 ring-white/70 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(0,82,204,0.14),transparent_55%),radial-gradient(700px_circle_at_90%_20%,rgba(0,163,191,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/55" aria-hidden="true" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-ink-black">Günün Özeti</div>
          <div className="mt-1 text-xs font-semibold text-slate-500">Bugün yaptıkların • motive edici görünüm</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <div className="badge bg-white/70 text-xs">Motivasyon</div>
            <div className="badge bg-white/70 text-xs">Hafta</div>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-clean-white/70 ring-1 ring-soft-line/60 text-trust-blue">
            <span className="sr-only">Takvim</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5h18" />
              <path d="M8 3v4" />
              <path d="M16 3v4" />
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M7 11h4" />
              <path d="M7 15h6" />
            </svg>
          </span>
        </div>
      </div>

      <div className="relative mt-6 grid gap-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-slate-500">Tamamlanan Egzersiz</div>
                <div className="mt-1 text-base font-semibold text-ink-black">
                  {completed}/{total} Dakika
                </div>
              </div>
              <div className="relative grid h-11 w-11 place-items-center">
                <svg aria-hidden="true" viewBox="0 0 44 44" className="h-11 w-11 -rotate-90">
                  <circle cx="22" cy="22" r={radius} stroke="rgba(148,163,184,0.45)" strokeWidth="6" fill="none" />
                  <circle
                    cx="22"
                    cy="22"
                    r={radius}
                    stroke="url(#pfGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={`${dash} ${circumference - dash}`}
                  />
                  <defs>
                    <linearGradient id="pfGrad" x1="0" y1="0" x2="44" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="rgba(0,82,204,0.95)" />
                      <stop offset="1" stopColor="rgba(0,163,191,0.95)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-[11px] font-semibold text-slate-700">{progress}%</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-slate-500">Seri (Streak)</div>
                <div className="mt-1 text-base font-semibold text-ink-black">5 Gün Üst Üste</div>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[radial-gradient(120%_120%_at_30%_20%,rgba(0,82,204,0.16),rgba(0,82,204,0.06),transparent_70%)] ring-1 ring-trust-blue/15 text-trust-blue">
                <span className="sr-only">Ateş</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-2 1-4 2-6" />
                  <path d="M12 10c2 2 3 3 3 5a3 3 0 0 1-6 0c0-1.5.8-2.6 3-5z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-slate-500">Haftalık Puan</div>
                <div className="mt-1 text-base font-semibold text-ink-black">450 XP</div>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[radial-gradient(120%_120%_at_30%_20%,rgba(0,163,191,0.16),rgba(0,163,191,0.06),transparent_70%)] ring-1 ring-healing-teal/15 text-healing-teal">
                <span className="sr-only">Yıldız</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3 7 7 .5-5.5 4.4 1.7 7.1L12 17.8 5.8 21l1.7-7.1L2 9.5 9 9z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-ink-black">Gelişim Rozetleri</div>
            <div className="text-xs font-semibold text-slate-500">Kazanılan</div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { label: "İlk Kelime", tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20" },
              { label: "Düzenli Çalışma", tone: "bg-healing-teal/10 text-healing-teal ring-healing-teal/20" },
              { label: "7 Gün Hedef", tone: "bg-slate-100 text-slate-700 ring-slate-200" },
              { label: "Yeni Seviye", tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20" },
            ].map((b) => (
              <span
                key={b.label}
                className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${b.tone}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/70">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-ink-black">Haftalık Özet</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Bu hafta ne kadar çalıştım?</div>
            </div>
            <div className="text-xs font-semibold text-slate-600">dk</div>
          </div>

          <div className="mt-5">
            <svg aria-hidden="true" viewBox="0 0 360 140" className="h-32 w-full">
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="140" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(0,82,204,0.92)" />
                  <stop offset="1" stopColor="rgba(0,163,191,0.75)" />
                </linearGradient>
              </defs>
              <path d="M10 128H350" stroke="rgba(148,163,184,0.45)" strokeWidth="1.5" />
              {[
                { x: 26, h: 40 },
                { x: 76, h: 58 },
                { x: 126, h: 72 },
                { x: 176, h: 64 },
                { x: 226, h: 88 },
                { x: 276, h: 76 },
                { x: 326, h: 92 },
              ].map((b, i) => (
                <rect
                  key={i}
                  x={b.x}
                  y={128 - b.h}
                  width="28"
                  height={b.h}
                  rx="10"
                  fill={i === 6 ? "url(#barGrad)" : "rgba(0,82,204,0.18)"}
                  stroke={i === 6 ? "rgba(0,82,204,0.25)" : "rgba(148,163,184,0.25)"}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
            İkili Ekosistem: <span className="text-trust-blue">Hasta</span> + <span className="text-healing-teal">Terapist</span>
          </h1>
          <p className="mt-4 text-lg text-soft-gray">
            Evde sürdürülebilir rehabilitasyon ve uzaktan veri odaklı yönetim aynı platformda.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="hasta-aile" className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 id="hasta-aile" className="text-2xl font-bold text-ink-black">
                  Kişiselleştirilmiş Ev Rehabilitasyonu
                </h2>
                <p className="mt-1 text-base text-soft-gray">Hasta ve Aile Paneli</p>
              </div>
              <ButtonLink href="/contact" variant="secondary" className="hidden sm:inline-flex">
                Başvuru & Bilgi
              </ButtonLink>
            </div>

            <div className="grid gap-4">
              <Feature
                title="Düşük maliyet"
                desc="Düzenli egzersizleri evde sürdürülebilir kılar; erişimi artırır."
                icon={<WalletIcon />}
              />
              <Feature
                title="Uzman kontrolünde eğitim"
                desc="Terapist planlar, takip eder ve gerektiğinde günceller."
                icon={<UserCheckIcon />}
              />
              <Feature
                title="Aile katılımı"
                desc="Yakınlar için net yönergeler ve büyük dokunma alanlarıyla destek."
                icon={<UsersIcon />}
              />
            </div>
          </section>

          <section aria-labelledby="terapist" className="space-y-4">
            <div>
              <h2 id="terapist" className="text-2xl font-bold text-ink-black">
                Veri Odaklı Uzaktan Yönetim
              </h2>
              <p className="mt-1 text-base text-soft-gray">Terapist Paneli</p>
            </div>

            <div className="grid gap-4">
              <Feature
                title="Objektif analiz raporları"
                desc="Performansı zaman içinde karşılaştırılabilir metriklerle görünür kılar."
                icon={<BarChart3Icon />}
              />
              <Feature
                title="Uzaktan hasta takibi"
                desc="Seans aralarında gelişimi izleyerek doğru zamanda müdahale etmeyi sağlar."
                icon={<SearchIcon />}
              />
              <Feature
                title="İş verimliliği artışı"
                desc="Rutin takip yükünü azaltır; daha fazla hastaya kaliteli destek."
                icon={<TrendingUpIcon />}
              />
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
          <Reveal className="h-full">
            <PatientFamilyMotivationPanel />
          </Reveal>
          <Reveal className="h-full">
            <TherapistDashboard />
          </Reveal>
        </div>

        <section aria-label="Partnerlik ve Demo" className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-trust-blue p-8 shadow-soft ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(800px_circle_at_85%_30%,rgba(0,163,191,0.22),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/15" aria-hidden="true" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <div className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                Aphasia Reverbis Teknolojisini Kurumunuzda Deneyimleyin
              </div>
              <p className="max-w-2xl text-[15px] font-medium leading-relaxed text-white/80">
                Rehabilitasyon süreçlerinizi dijitalleştirmek ve platform ortağımız olmak için demo sürümü talep edebilirsiniz.
              </p>
              <ButtonLink
                href="#demo-talep"
                variant="secondary"
                className="mt-1 w-full bg-white px-8 py-4 text-lg font-semibold text-trust-blue shadow-lg ring-0 hover:bg-clean-white sm:w-auto"
              >
                Demo ve Partnerlik Başvurusu
              </ButtonLink>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}



