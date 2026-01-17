import { Container } from "@/components/Container";

export default function CookiePolicyPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
            Çerez Politikası
          </h1>
          <p className="mt-4 text-lg text-soft-gray">
            Çerezlerin kullanım amacı ve yönetimi bu sayfada açıklanacaktır.
          </p>
        </div>

        <div className="mt-10 card p-6">
          <div className="text-base font-bold text-ink-black">Bilgilendirme</div>
          <p className="mt-2 text-base text-soft-gray">
            Bu sayfa şu an placeholder’dır. Çerez yönetimi (onay/ret) altyapısı eklemek isterseniz ayrıca entegre edebiliriz.
          </p>
        </div>
      </Container>
    </div>
  );
}



