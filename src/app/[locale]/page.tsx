import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EvidenceMarquee } from "@/components/evidence-marquee";
import { Navigation } from "@/components/navigation";
import { OrganizationMark } from "@/components/organization-mark";
import { ProjectMedia } from "@/components/project-media";
import { Reveal } from "@/components/reveal";
import { SectionMarker } from "@/components/section-marker";
import { SocialIcon } from "@/components/social-icon";
import { content, isLocale } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const copy = content[locale];
  return {
    metadataBase: siteUrl,
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", "zh-CN": "/zh" },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: `/${locale}`,
      siteName: copy.meta.title,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
    },
  };
}

export default async function PortfolioPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = content[locale];
  const otherLocale = locale === "en" ? "zh" : "en";

  return (
    <>
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <Navigation copy={copy} languageHref={`/${otherLocale}`} />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="profile-layout">
            <div className="profile-copy">
              <p className="eyebrow">{copy.hero.kicker}</p>
              <div className="identity-heading">
                <h1 id="hero-title">{copy.identity.name}</h1>
                <p>{copy.identity.role}</p>
              </div>
              <p className="profile-focus">{copy.hero.title}</p>
              <p className="profile-summary">{copy.hero.description}</p>
              <dl className="profile-facts">
                <div>
                  <dt>
                    <SocialIcon name="location" />
                    {locale === "zh" ? "所在地" : "Location"}
                  </dt>
                  <dd>{copy.identity.location}</dd>
                </div>
                <div>
                  <dt>{locale === "zh" ? "教育" : "Education"}</dt>
                  <dd>{copy.identity.affiliation}</dd>
                </div>
              </dl>
              <nav
                className="profile-contact-grid"
                aria-label={locale === "zh" ? "联系方式" : "Contact links"}
              >
                <a href={`mailto:${copy.identity.email}`}>
                  <span className="profile-contact-icon">
                    <SocialIcon name="email" />
                  </span>
                  <span className="profile-contact-copy">
                    <small>Email</small>
                    <strong>{copy.identity.email}</strong>
                  </span>
                  <i aria-hidden="true">↗</i>
                </a>
                <a href={copy.identity.github} rel="noreferrer" target="_blank">
                  <span className="profile-contact-icon">
                    <SocialIcon name="github" />
                  </span>
                  <span className="profile-contact-copy">
                    <small>GitHub</small>
                    <strong>@kaikkd</strong>
                  </span>
                  <i aria-hidden="true">↗</i>
                </a>
                <a href={copy.identity.linkedin} rel="noreferrer" target="_blank">
                  <span className="profile-contact-icon">
                    <SocialIcon name="linkedin" />
                  </span>
                  <span className="profile-contact-copy">
                    <small>LinkedIn</small>
                    <strong>Jun Wang</strong>
                  </span>
                  <i aria-hidden="true">↗</i>
                </a>
              </nav>
              <div className="hero-actions">
                <a className="button button--primary" href="#work">
                  {copy.hero.viewWork}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="profile-side">
              <figure className="profile-photo">
                <Image
                  src="/profile/jun-wang.jpg"
                  alt={locale === "zh" ? "王骏的证件照" : "Portrait of Jun Wang"}
                  fill
                  priority
                  sizes="(max-width: 720px) 42vw, 280px"
                />
              </figure>
              <div className="availability-card">
                <p>
                  <span aria-hidden="true" />
                  {copy.hero.status}
                </p>
                <span>{copy.identity.location} · PT</span>
              </div>
            </div>
          </div>
        </section>

        {copy.notice && (
          <aside className="template-notice section-shell" aria-label={copy.notice}>
            <span>NOTE</span>
            <p>{copy.notice}</p>
          </aside>
        )}

        <EvidenceMarquee label={copy.signal.label} items={copy.signal.items} />

        <section className="work section-shell" id="work" aria-labelledby="work-title">
          <div className="section-intro">
            <SectionMarker index="01" label={copy.work.eyebrow} />
            <Reveal>
              <h2 id="work-title">{copy.work.title}</h2>
            </Reveal>
            <p>{copy.work.description}</p>
          </div>

          <div className="project-list">
            {copy.projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <article className="project-card">
                  <Link
                    className="project-visual-link"
                    href={`/${locale}/projects/${project.slug}`}
                    aria-label={`${copy.work.viewCase}: ${project.title}`}
                  >
                    <ProjectMedia project={project} />
                  </Link>
                  <div className="project-copy">
                    <div className="project-heading">
                      <p className="eyebrow">{project.eyebrow}</p>
                      <span>{project.index}</span>
                    </div>
                    <h3>
                      <Link href={`/${locale}/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="project-summary">{project.summary}</p>
                    <ul className="tag-list" aria-label="Technologies">
                      {project.stack.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link className="case-link" href={`/${locale}/projects/${project.slug}`}>
                      {copy.work.viewCase}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="experience section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-intro section-intro--split">
            <SectionMarker index="02" label={copy.experience.eyebrow} />
            <Reveal>
              <h2 id="experience-title">{copy.experience.title}</h2>
            </Reveal>
          </div>
          <div className="role-list">
            {copy.experience.roles.map((role) => (
              <article className="role" key={`${role.period}-${role.role}`}>
                <div className="role-organization">
                  <OrganizationMark id={role.organizationId} />
                  <div>
                    <h3>{role.company}</h3>
                    <p>{role.location}</p>
                  </div>
                </div>
                <div className="role-content">
                  <div className="role-title-row">
                    <h4>{role.role}</h4>
                    <p className="role-period">{role.period}</p>
                  </div>
                  <ul className="role-highlights">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-shell" id="education" aria-labelledby="education-title">
          <div className="section-intro section-intro--split">
            <SectionMarker index="03" label={copy.experience.educationLabel} />
            <Reveal>
              <h2 id="education-title">
                {locale === "zh" ? "学习经历与荣誉。" : "Education and selected honors."}
              </h2>
            </Reveal>
          </div>
          <div className="education-list">
            {copy.experience.education.map((item) => (
              <article key={item.school}>
                <div className="education-organization">
                  <OrganizationMark id={item.organizationId} />
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.location}</p>
                  </div>
                </div>
                <div className="education-content">
                  <div>
                    <h4>{item.degree}</h4>
                    <p className="role-period">{item.period}</p>
                  </div>
                  {item.honors && (
                    <ul className="education-honors">
                      {item.honors.map((honor) => (
                        <li key={honor}>{honor}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-shell" id="skills" aria-labelledby="skills-title">
          <div className="section-intro section-intro--split">
            <SectionMarker index="04" label={copy.skills.eyebrow} />
            <Reveal>
              <h2 id="skills-title">{copy.skills.title}</h2>
            </Reveal>
          </div>
          <div className="skills-grid">
            {copy.skills.groups.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="research section-shell"
          id="research"
          aria-labelledby="research-title"
        >
          <div className="research-intro">
            <SectionMarker index="05" label={copy.research.eyebrow} />
            <Reveal>
              <h2 id="research-title">{copy.research.title}</h2>
            </Reveal>
            <p>{copy.research.description}</p>
          </div>
          <div className="publication-list">
            {copy.research.publications.map((publication) => (
              <article className="publication" key={publication.index}>
                <span>{publication.index}</span>
                <div>
                  <p className="publication-meta">
                    {publication.venue} · {publication.role}
                  </p>
                  <h3>{publication.title}</h3>
                  <p className="publication-result">{publication.result}</p>
                </div>
                <a href={publication.href} rel="noreferrer" target="_blank">
                  {publication.linkLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <SectionMarker index="06" label={copy.contact.eyebrow} light />
          <Reveal>
            <h2 id="contact-title">{copy.contact.title}</h2>
          </Reveal>
          <div className="contact-bottom">
            <p>{copy.contact.description}</p>
            <div className="contact-actions">
              <a className="email-link" href={`mailto:${copy.identity.email}`}>
                <SocialIcon name="email" />
                <span>{copy.contact.emailLabel}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="contact-social-row">
                <a href={copy.identity.github} rel="noreferrer" target="_blank">
                  <SocialIcon name="github" />
                  GitHub · kaikkd
                  <span aria-hidden="true">↗</span>
                </a>
                <a href={copy.identity.linkedin} rel="noreferrer" target="_blank">
                  <SocialIcon name="linkedin" />
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© 2026 {copy.identity.name.toUpperCase()}</p>
        <p>{copy.footer}</p>
        <a href="#main" aria-label={locale === "zh" ? "返回顶部" : "Back to top"}>
          ↑
        </a>
      </footer>
    </>
  );
}
