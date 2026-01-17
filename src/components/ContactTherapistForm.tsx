"use client";

import { Button } from "@/components/Button";

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-ink-black">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-base ring-1 ring-soft-line shadow-soft-sm/40 transition focus:ring-4 focus:ring-trust-blue/20"
      />
    </label>
  );
}

export function ContactTherapistForm() {
  return (
    <form
      className="card p-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Teşekkürler! Bu form demo. İsterseniz info@aphasiareverbis.com adresine e-posta atabilirsiniz.");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ad Soyad" name="fullName" placeholder="Örn: Ayşe Yılmaz" />
        <Field label="E-posta" name="email" type="email" placeholder="Örn: ayse@ornek.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telefon (opsiyonel)" name="phone" placeholder="Örn: 05xx xxx xx xx" />
        <Field label="Uzmanlık" name="specialty" placeholder="Örn: Dil ve konuşma terapisi" />
      </div>
      <label className="block">
        <span className="block text-sm font-semibold text-ink-black">Mesaj</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Kendinizi kısaca tanıtın, çalışma şekliniz ve ilgi alanlarınız..."
          className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-base ring-1 ring-soft-line shadow-soft-sm/40 transition focus:ring-4 focus:ring-trust-blue/20"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-soft-gray">
          Not: Bu form demo amaçlıdır; gönderim şu an e-posta ile ilerler.
        </p>
        <Button type="submit" className="w-full sm:w-auto">
          Başvuruyu Gönder
        </Button>
      </div>
    </form>
  );
}


