"use client";

import { Button } from "@/components/Button";

export function PdfReportButton({ className }: { className?: string }) {
  return (
    <Button
      variant="secondary"
      className={className}
      type="button"
      onClick={() => {
        alert("Demo: PDF raporu indirme özelliği (yakında).");
      }}
    >
      PDF Raporu Olarak Al
    </Button>
  );
}









