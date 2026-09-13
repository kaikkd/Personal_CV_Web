import Link from "next/link";
import type { PortfolioContent } from "@/content/types";

type NavigationProps = {
  copy: PortfolioContent;
  languageHref: string;
};

export function Navigation({ copy, languageHref }: NavigationProps) {
  const home = `/${copy.locale}`;

  return (
    <header className="site-header">
      <Link className="wordmark" href={home} aria-label={copy.meta.title}>
        <span className="wordmark-dot" aria-hidden="true" />
        {copy.identity.name}
      </Link>
      <nav className="desktop-nav" aria-label={copy.nav.menu}>
        <Link href={`${home}#work`}>{copy.nav.work}</Link>
        <Link href={`${home}#experience`}>{copy.nav.experience}</Link>
        <Link href={`${home}#research`}>{copy.nav.research}</Link>
        <Link href={`${home}#contact`}>{copy.nav.contact}</Link>
      </nav>
      <Link className="language-switch" href={languageHref} hrefLang={copy.locale === "en" ? "zh" : "en"}>
        {copy.languageLabel}
        <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
