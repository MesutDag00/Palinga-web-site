import { Container } from "@/components/Container";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
            Gizlilik Sözleşmesi
          </h1>
          <p className="mt-4 text-lg text-soft-gray">
            Gizlilik ve veri işleme esasları bu sayfada açıklanacaktır.
          </p>
        </div>

        <div className="mt-10 card p-6">
          <div className="text-base font-bold text-ink-black">Özet</div>
          <p className="mt-2 text-base text-soft-gray">
            Bu sayfa şu an placeholder’dır. Nihai sözleşme metninizi paylaştığınızda kurumsal dil ve yapı ile düzenleyebiliriz.
          </p>
        </div>
      </Container>
    </div>
  );
}



