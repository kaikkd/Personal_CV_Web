"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileNavigation } from "@/components/mobile-navigation";
import type { PortfolioContent } from "@/content/types";

type NavigationProps = {
  copy: PortfolioContent;
  languageHref: string;
};

export function Navigation({ copy, languageHref }: NavigationProps) {
  const home = `/${copy.locale}`;
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setCompact((current) =>
          current ? window.scrollY > 80 : window.scrollY > 120,
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <>
      <header
        aria-hidden={compact || undefined}
        className="site-header"
        data-compact={compact || undefined}
        inert={compact}
      >
        <Link className="wordmark" href={home} aria-label={copy.meta.title}>
          <span className="wordmark-dot" aria-hidden="true" />
          {copy.identity.name}
        </Link>
        <nav className="desktop-nav" aria-label={copy.nav.menu}>
          <Link href={`${home}#work`}>{copy.nav.work}</Link>
          <Link href={`${home}#experience`}>{copy.nav.experience}</Link>
          <Link href={`${home}#education`}>{copy.nav.education}</Link>
          <Link href={`${home}#skills`}>{copy.nav.skills}</Link>
          <Link href={`${home}#research`}>{copy.nav.research}</Link>
          <Link href={`${home}#contact`}>{copy.nav.contact}</Link>
        </nav>
        <div className="header-actions">
          <MobileNavigation home={home} nav={copy.nav} panelId="header-mobile-nav" />
          <Link
            className="language-switch"
            href={languageHref}
            hrefLang={copy.locale === "en" ? "zh" : "en"}
          >
            {copy.languageLabel}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      {compact && (
        <div className="compact-nav-dock">
          <MobileNavigation home={home} nav={copy.nav} panelId="compact-nav-panel" />
          <Link
            className="language-switch language-switch--compact"
            href={languageHref}
            hrefLang={copy.locale === "en" ? "zh" : "en"}
          >
            {copy.languageLabel}
          </Link>
        </div>
      )}
    </>
  );
}
