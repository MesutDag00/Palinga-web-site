"use client";

import { useEffect, useRef, useState } from "react";

function formatNumber(value: number) {
  return new Intl.NumberFormat("tr-TR").format(value);
}

export function CountUp({
  to,
  durationMs = 1100,
  prefix,
  suffix,
  startWhenVisible = false,
}: {
  to: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  startWhenVisible?: boolean;
}) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const startedRef = useRef(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      startRef.current = performance.now();
      const tick = (now: number) => {
        const start = startRef.current ?? now;
        const t = Math.min(1, (now - start) / durationMs);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * to));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!startWhenVisible) {
      startAnimation();
      return () => cancelAnimationFrame(raf);
    }

    const el = spanRef.current;
    if (!el) {
      startAnimation();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            startAnimation();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [durationMs, startWhenVisible, to]);

  return (
    <span ref={spanRef} aria-label={`${prefix ?? ""}${to}${suffix ?? ""}`}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}


