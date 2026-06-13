"use client";

import { FormEvent, useState } from "react";

const responses: Record<string, string> = {
  help: "Commands: about, work, writing, contact, resume, help",
  about: "Dipak is a full stack software engineer focused on scalable systems, AI products, and real production software.",
  work: "RiseMind, MyVitalView, RedSand, HypeFresh. Open /work for case studies.",
  writing: "Open /writing for engineering notes on architecture, AI workflows, APIs, and internal tools.",
  contact: "Open /connect to reach Dipak.",
  resume: "For resume or collaboration details, email dipakdhariyaparmar@gmail.com or book a call at /hire-me."
};

export default function OSPage() {
  const [history, setHistory] = useState(["dipak.dev terminal", responses.help]);
  const [input, setInput] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    setHistory((items) => [...items, `$ ${command}`, responses[command] ?? `Unknown command: ${command}`]);
    setInput("");
  }

  return (
    <main className="section-shell grid min-h-screen place-items-center pt-20">
      <section className="w-full max-w-4xl border border-line bg-black p-5 font-mono shadow-glow">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="min-h-[420px] space-y-2 text-sm text-signal">
          {history.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}
        </div>
        <form onSubmit={onSubmit} className="mt-4 flex items-center gap-2 border-t border-line pt-4">
          <span className="text-signal">$</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="flex-1 bg-transparent text-signal outline-none"
            autoFocus
            aria-label="Terminal command"
          />
        </form>
      </section>
    </main>
  );
}
