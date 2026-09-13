import "../globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
};

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
