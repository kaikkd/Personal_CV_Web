import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale, locales } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={locale === "zh" ? "locale-zh" : undefined}>
        <a className="skip-link" href="#main">
          {locale === "zh" ? "跳至主要内容" : "Skip to main content"}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
