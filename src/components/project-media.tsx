import Image from "next/image";
import type { Project } from "@/content/types";

export function ProjectMedia({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  const className = `project-media project-media--${project.accent}${
    detail ? " project-media--detail" : ""
  }`;

  if (project.media.kind === "image") {
    return (
      <figure className={`${className} project-media--image`}>
        <Image
          src={project.media.src}
          alt={project.media.alt}
          fill
          sizes={detail ? "(max-width: 720px) 100vw, 1120px" : "(max-width: 800px) 100vw, 52vw"}
          className="project-screenshot"
        />
        <figcaption>{project.media.caption}</figcaption>
      </figure>
    );
  }

  if (project.media.kind === "architecture") {
    return (
      <figure className={`${className} architecture-media`} aria-label={project.media.alt}>
        <div className="media-kicker">
          <span>RUNTIME ARCHITECTURE</span>
          <span>OPEN SOURCE</span>
        </div>
        <div className="architecture-flow" aria-hidden="true">
          <span>Plan</span>
          <i>→</i>
          <span>Execute</span>
          <i>→</i>
          <span>Reflect</span>
          <i>→</i>
          <span>Iterate</span>
        </div>
        <div className="architecture-layers" aria-hidden="true">
          <span>Risk router</span>
          <span>6 typed tools</span>
          <span>Critic retries</span>
          <span>File sandbox</span>
          <span>SSE events</span>
        </div>
      </figure>
    );
  }

  return (
    <figure className={`${className} evidence-media`} aria-label={project.media.alt}>
      <div className="media-kicker">
        <span>INTERNAL SYSTEM</span>
        <span>DETAILS ABSTRACTED</span>
      </div>
      <div className="evidence-flow" aria-hidden="true">
        <span>Dataset</span>
        <i />
        <span>Docker sandbox</span>
        <i />
        <span>Trajectory RCA</span>
        <i />
        <span>Report</span>
      </div>
      <div className="evidence-metrics">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}
