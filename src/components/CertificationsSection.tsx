import { profile } from "@/data/profile";
import { Section } from "./Section";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      label="$ certs --list"
      title="Certifications"
      description="Completed credentials and planned certification work that support my IT and cloud engineering path."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {profile.certifications.map((cert) => (
          <article
            key={cert.name}
            className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-blue-400/35 hover:shadow-[0_0_22px_rgba(59,130,246,0.08)]"
          >
            <p className="font-mono text-sm text-blue-300">{cert.issuer}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-50">{cert.name}</h3>
            <p
              className={`mt-2 text-sm ${
                cert.date.toLowerCase().startsWith("expected")
                  ? "text-amber-200"
                  : "text-slate-400"
              }`}
            >
              {cert.date}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
