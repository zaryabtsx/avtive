"use client";

import type { ReactNode } from "react";
import { CardArtboardScaler } from "@/components/CardArtboardScaler";
import { CARD_ARTBOARD_HORIZONTAL } from "@/lib/card-preview-scale";

/** Fits a 1200×628 horizontal CardPreview inside its parent width. */
export function HorizontalPreviewScaler({
  className,
  children,
  maxScale = 0.65,
}: {
  className?: string;
  children: ReactNode;
  maxScale?: number;
}) {
  return (
    <CardArtboardScaler
      artboardWidth={CARD_ARTBOARD_HORIZONTAL.width}
      artboardHeight={CARD_ARTBOARD_HORIZONTAL.height}
      className={className}
      fitMode="width"
      maxScale={maxScale}
    >
      {children}
    </CardArtboardScaler>
  );
}
