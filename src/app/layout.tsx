import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { site } from "@/data/site";
import { baskerville, pinyon } from "@/lib/fonts";
import { cx } from "@/lib/cx";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/primitives.css";
import "@/styles/theme.css";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: ThemeScript adds the `jk-light` class before React hydrates.
    <html lang="en" className={cx(baskerville.variable, pinyon.variable)} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
