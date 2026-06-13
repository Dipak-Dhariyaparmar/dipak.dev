import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Dipak Dhariyaparmar | Full Stack Software Engineer",
  description:
    "A cinematic personal brand website for Dipak Dhariyaparmar, focused on production systems, AI products, and modern full stack engineering.",
  metadataBase: new URL("https://dipak.dev"),
  openGraph: {
    title: "Dipak Dhariyaparmar",
    description: "Full Stack Software Engineer building software people actually use.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
