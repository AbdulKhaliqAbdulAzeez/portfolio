import { profile } from "@/data/profile";
import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section
      id="contact"
      label="$ ./contact"
      title="Contact"
      description="Open to cloud engineering, infrastructure, IT support, Linux, networking, and DevOps-adjacent internship opportunities."
    >
      <div className="rounded-lg border border-blue-400/20 bg-slate-950/80 p-5 transition hover:border-blue-400/45 hover:shadow-[0_0_24px_rgba(59,130,246,0.1)] sm:p-6">
        <p className="max-w-2xl leading-7 text-slate-300">
          The fastest way to reach me is email. My GitHub shows the project work
          behind this portfolio, and LinkedIn has my updated professional profile.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {profile.contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex min-h-[44px] items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-teal-300 hover:bg-teal-400/10 hover:text-teal-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="flex min-h-[44px] items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </Section>
  );
}
