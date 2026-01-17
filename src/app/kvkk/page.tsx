import { Container } from "@/components/Container";

export default function KvkkPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">KVKK</h1>
          <p className="mt-4 text-lg text-soft-gray">
            Kişisel Verilerin Korunması Kanunu (KVKK) bilgilendirme metni burada yer alacaktır.
          </p>
        </div>

        <div className="mt-10 card p-6">
          <div className="text-base font-bold text-ink-black">Bilgilendirme</div>
          <p className="mt-2 text-base text-soft-gray">
            Bu sayfa şu an placeholder’dır. Kurumsal KVKK metniniz hazır olduğunda buraya ekleyebiliriz.
          </p>
        </div>
      </Container>
    </div>
  );
}



