import Image from "next/image";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100vh-88px)] items-center gap-10 py-12 sm:min-h-[calc(100vh-72px)] sm:py-14 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <Image
          src="/portfolioImage.png"
          alt={profile.name}
          width={324}
          height={324}
          priority
          className="mb-8 h-[276px] w-[276px] rounded-3xl object-cover object-top shadow-[0_0_32px_rgba(20,184,166,0.2)] ring-2 ring-teal-300 ring-offset-4 ring-offset-slate-950 sm:h-[324px] sm:w-[324px]"
        />
        <p className="font-mono text-sm text-teal-300">$ whoami</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-slate-50 sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-blue-200 sm:text-xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.professionalIdentity}
        </p>
        <ul className="mt-6 grid gap-2 text-sm leading-6 text-slate-300">
          {profile.headlineBullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-3">
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href="#projects"
              className="flex min-h-[44px] items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              View Cloud Projects
            </a>
            <a
              href={profile.resume}
              download
              className="flex min-h-[44px] items-center justify-center rounded-md border border-blue-400/50 bg-slate-900 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:border-blue-300 hover:bg-blue-400/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Resume PDF
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
            {profile.contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex min-h-[44px] items-center justify-center rounded-md border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-teal-300 hover:bg-teal-400/10 hover:text-teal-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              {link.label}
            </a>
            ))}
          </div>
        </div>
      </div>
      <div className="scanline-panel rounded-lg border border-teal-300/20 bg-slate-950/85 p-5 shadow-[0_0_28px_rgba(59,130,246,0.14)]">
        <div className="relative mb-4 flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-teal-300" />
        </div>
        <pre className="relative overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-7 text-slate-200 sm:text-base">
          <code>{`abdul@portfolio:~$ ./cloud-path
Identity: junior IT student -> cloud engineer
Seeking: cloud / infrastructure / DevOps-adjacent internship
Location: ${profile.location}
Focus: Linux | Terraform | Networking | Automation
Cursor: ready`}</code>
          <span className="terminal-cursor">_</span>
        </pre>
      </div>
    </section>
  );
}
