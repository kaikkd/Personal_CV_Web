import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jun Wang — AI Application & Software Engineer",
    short_name: "Jun Wang",
    description:
      "A bilingual portfolio covering agent runtimes, evaluation infrastructure, and full-stack AI products.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f2f0e9",
    theme_color: "#11110f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
