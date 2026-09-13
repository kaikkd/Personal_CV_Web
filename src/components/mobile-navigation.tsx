"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PortfolioContent } from "@/content/types";

export function MobileNavigation({
  home,
  nav,
  panelId = "mobile-nav-panel",
}: {
  home: string;
  nav: PortfolioContent["nav"];
  panelId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();
    const closeFromOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromKeyboard);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, [open]);

  const items = [
    [nav.work, "work"],
    [nav.experience, "experience"],
    [nav.education, "education"],
    [nav.skills, "skills"],
    [nav.research, "research"],
    [nav.contact, "contact"],
  ] as const;

  return (
    <div className="mobile-navigation" ref={rootRef}>
      <button
        aria-controls={panelId}
        aria-expanded={open}
        className="mobile-nav-trigger"
        onClick={(event) => {
          setKeyboardOpen(event.detail === 0);
          setOpen((current) => !current);
        }}
        ref={buttonRef}
        type="button"
      >
        <span>{open ? (nav.menu === "菜单" ? "关闭" : "Close") : nav.menu}</span>
        <i aria-hidden="true" />
      </button>
      <nav
        aria-label={nav.menu}
        className="mobile-nav-panel"
        data-keyboard={keyboardOpen || undefined}
        hidden={!open}
        id={panelId}
      >
        {items.map(([label, section], index) => (
          <Link
            href={`${home}#${section}`}
            key={section}
            onClick={() => setOpen(false)}
            ref={index === 0 ? firstLinkRef : undefined}
          >
            <span>0{index + 1}</span>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
