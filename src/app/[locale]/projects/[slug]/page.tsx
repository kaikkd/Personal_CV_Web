import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { ProjectMedia } from "@/components/project-media";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { SiteFooter } from "@/components/site-footer";
import { content, isLocale, locales } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    content[locale].projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = content[locale].projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    metadataBase: siteUrl,
    title: `${project.title} — ${content[locale].meta.title}`,
    description: project.summary,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        "zh-CN": `/zh/projects/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/${locale}/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const copy = content[locale];
  const projectIndex = copy.projects.findIndex((item) => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = copy.projects[projectIndex];
  const nextProject = copy.projects[(projectIndex + 1) % copy.projects.length];
  const otherLocale = locale === "en" ? "zh" : "en";
  const newTabLabel = locale === "zh" ? "（在新标签页打开）" : " (opens in a new tab)";

  return (
    <>
      <Navigation
        copy={copy}
        languageHref={`/${otherLocale}/projects/${project.slug}`}
      />
      <main id="main" className="case-page">
        <header className="case-hero section-shell">
          <Link className="back-link" href={`/${locale}#work`}>
            <span aria-hidden="true">←</span>
            {copy.projectPage.back}
          </Link>
          <div className="case-title-row">
            <div>
              <p className="eyebrow">
                {project.eyebrow} / {project.index}
              </p>
              <h1 className="case-title-heading">{project.title}</h1>
            </div>
            <p className="case-summary">{project.summary}</p>
          </div>
          <ProjectMedia project={project} detail />
        </header>

        <section className="case-metrics section-shell" aria-label="Project outcomes">
          {project.metrics.map((metric, index) => (
            <div
              className="case-metric"
              key={metric.label}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <div className="case-body section-shell">
          {[
            [copy.projectPage.challenge, project.challenge],
            [copy.projectPage.solution, project.solution],
            [copy.projectPage.result, project.result],
          ].map(([title, body], index) => (
            <Reveal className="case-section" delay={index * 0.04} key={title}>
              <SectionMarker index={`0${index + 1}`} label={title} />
              <div>
                <h2 className="sr-only">{title}</h2>
                <p>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <section className="case-stack section-shell">
          <SectionMarker index="04" label={copy.projectPage.stack} />
          <div className="case-stack-content">
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    aria-label={`${link.label}${newTabLabel}`}
                    key={link.href}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="next-case section-shell">
          <SectionMarker index="05" label={copy.projectPage.next} light />
          <Link href={`/${locale}/projects/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter copy={copy} />
    </>
  );
}
