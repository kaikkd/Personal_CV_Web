import type { PortfolioContent } from "@/content/types";

export function SiteFooter({ copy }: { copy: PortfolioContent }) {
  return (
    <footer className="site-footer section-shell">
      <p>© 2026 {copy.identity.name.toUpperCase()}</p>
      <p>{copy.footer}</p>
      <a
        aria-label={copy.locale === "zh" ? "返回顶部" : "Back to top"}
        href="#main"
      >
        ↑
      </a>
    </footer>
  );
}
