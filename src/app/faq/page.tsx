import { Container } from "@/components/Container";

export default function FaqPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">SSS</h1>
          <p className="mt-4 text-lg text-soft-gray">
            Sık sorulan sorular bu sayfada paylaşılacaktır.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {[
            {
              q: "Demo talebi nasıl oluşturabilirim?",
              a: "Platform sayfasının en altındaki “Demo ve Partnerlik Başvurusu” alanından talep bırakabilirsiniz.",
            },
            {
              q: "Kurumsal pilot çalışma süreci nasıl ilerler?",
              a: "Kapsam, hedef metrikler ve değerlendirme periyodu birlikte tanımlanır; ardından demo/pilot kurulumu planlanır.",
            },
            {
              q: "Hangi platformları destekliyorsunuz?",
              a: "Mobil ve web tabanlı kullanım senaryolarına uygun şekilde tasarlanmıştır.",
            },
          ].map((item) => (
            <div key={item.q} className="card card-hover p-6">
              <div className="text-lg font-bold text-ink-black">{item.q}</div>
              <p className="mt-2 text-base text-soft-gray">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}



