import Image from "next/image";

export type OrganizationId = "bytedance" | "largev" | "ucsd" | "bjfu";

const marks: Record<
  Exclude<OrganizationId, "largev">,
  { src: string; alt: string; className: string }
> = {
  bytedance: {
    src: "/brands/bytedance.svg",
    alt: "ByteDance",
    className: "organization-mark--bytedance",
  },
  ucsd: {
    src: "/brands/ucsd.svg",
    alt: "UC San Diego",
    className: "organization-mark--ucsd",
  },
  bjfu: {
    src: "/brands/bjfu.png",
    alt: "Beijing Forestry University",
    className: "organization-mark--bjfu",
  },
};

export function OrganizationMark({ id }: { id: OrganizationId }) {
  if (id === "largev") {
    return (
      <div className="organization-mark organization-mark--largev" aria-label="LargeV">
        <span>Large</span>
        <strong>V</strong>
      </div>
    );
  }

  const mark = marks[id];
  return (
    <div className={`organization-mark ${mark.className}`}>
      <Image src={mark.src} alt={mark.alt} fill sizes="160px" />
    </div>
  );
}
