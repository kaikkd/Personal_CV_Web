import Image from "next/image";
import type { Project } from "@/content/types";

export function ProjectMedia({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  return (
    <figure
      className={`project-media project-media--${project.accent}${
        detail ? " project-media--detail" : ""
      }`}
    >
      <Image
        src={project.media.src}
        alt={project.media.alt}
        fill
        sizes={
          detail
            ? "(max-width: 767px) calc(100vw - 32px), 1180px"
            : "(max-width: 767px) calc(100vw - 32px), 50vw"
        }
        className="project-screenshot"
      />
      <figcaption>{project.media.caption}</figcaption>
    </figure>
  );
}
