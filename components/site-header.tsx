"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const desktopNav = navItems.filter((item) => item.href !== "/connect");

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="section-shell flex min-h-24 items-center justify-between gap-5 py-5">
        <Link href="/" className="focus-ring group flex min-w-0 items-center gap-3 rounded-sm">
          <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line bg-white/[0.06] shadow-glow transition group-hover:border-signal">
            <Image src="/profile.png" alt="Dipak Dhariyaparmar" width={48} height={48} className="h-full w-full object-cover" priority />
          </span>
          <span className="block min-w-0 truncate text-base font-black leading-tight text-fog transition group-hover:text-signal sm:text-xl">
            Dipak Dhariyaparmar
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring group relative py-2 text-[13px] font-semibold transition xl:text-sm ${
                pathname === item.href ? "text-fog" : "text-fog/46 hover:text-fog"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-signal transition-transform ${
                  pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-fog/50">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_16px_rgba(110,231,183,0.75)]" />
            Available
          </span>
          <Link href="/hire-me" className="focus-ring group inline-flex items-center gap-2 border-b border-fog/35 pb-1 text-sm font-black text-fog transition hover:border-signal hover:text-signal">
            Schedule Call <ArrowUpRight size={15} />
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
          <div className="grid gap-1 border-t border-line bg-ink/92 py-4 backdrop-blur-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-1 py-4 text-sm font-semibold ${
                  pathname === item.href ? "text-signal" : "text-fog/80"
                }`}
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
