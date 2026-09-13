import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { ProjectMedia } from "@/components/project-media";
import { Reveal } from "@/components/reveal";
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
              <Reveal>
                <h1>{project.title}</h1>
              </Reveal>
            </div>
            <p className="case-summary">{project.summary}</p>
          </div>
          <ProjectMedia project={project} detail />
        </header>

        <section className="case-metrics section-shell" aria-label="Project outcomes">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <div className="case-body section-shell">
          <section>
            <p className="eyebrow">01</p>
            <div>
              <h2>{copy.projectPage.challenge}</h2>
              <p>{project.challenge}</p>
            </div>
          </section>
          <section>
            <p className="eyebrow">02</p>
            <div>
              <h2>{copy.projectPage.solution}</h2>
              <p>{project.solution}</p>
            </div>
          </section>
          <section>
            <p className="eyebrow">03</p>
            <div>
              <h2>{copy.projectPage.result}</h2>
              <p>{project.result}</p>
            </div>
          </section>
        </div>

        <section className="case-stack section-shell">
          <p className="eyebrow">{copy.projectPage.stack}</p>
          <div className="case-stack-content">
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="next-case section-shell">
          <p className="eyebrow">{copy.projectPage.next}</p>
          <Link href={`/${locale}/projects/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    </>
  );
}
