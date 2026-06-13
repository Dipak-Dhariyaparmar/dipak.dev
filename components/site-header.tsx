"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const portfolioNav = navItems.filter((item) => item.href !== "/");

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="section-shell flex h-24 items-center justify-between gap-5">
        <Link href="/" className="focus-ring group grid gap-1 rounded-sm">
          <span className="text-base font-black leading-none tracking-normal text-fog transition group-hover:text-signal">
            Dipak Dhariyaparmar
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-fog/45">Full Stack Software Engineer</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {portfolioNav.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-sm text-sm transition ${
                pathname === item.href ? "text-fog" : "text-fog/48 hover:text-fog"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-fog/45">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_16px_rgba(110,231,183,0.75)]" />
            Available
          </span>
          <Link href="/connect" className="focus-ring inline-flex items-center gap-2 border-b border-fog/45 pb-1 text-sm font-semibold transition hover:border-signal hover:text-signal">
            Connect <ArrowUpRight size={15} />
          </Link>
        </div>
        <button
          className="focus-ring grid h-10 w-10 place-items-center border border-line bg-ink/40 backdrop-blur-xl lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div className="section-shell lg:hidden">
          <div className="grid gap-1 border border-line bg-ink/92 p-4 backdrop-blur-2xl">
          {portfolioNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-4 text-sm text-fog/80 last:border-b-0"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={15} />
            </Link>
          ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
