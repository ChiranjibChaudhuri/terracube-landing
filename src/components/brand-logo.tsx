"use client";

import Image from "next/image";
import { BRAND_NAME } from "@/lib/constants";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.svg"
        alt={BRAND_NAME}
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="text-xl font-bold gradient-text">{BRAND_NAME}</span>
    </div>
  );
}
