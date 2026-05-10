import { profile } from "@/data/profile";
import { Section } from "./Section";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      label="$ printenv SKILLS"
      title="Skills, Tools, and Interests"
      description="Grouped around the tools and interests that support my cloud engineering direction."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(profile.skills).map(([category, skills]) => (
          <div
            key={category}
            className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-blue-400/35 hover:shadow-[0_0_22px_rgba(59,130,246,0.08)]"
          >
            <h3 className="font-mono text-sm text-teal-300">{category}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {skills.map((skill) => (
                <li key={skill} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
