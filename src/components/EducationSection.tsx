import { profile } from "@/data/profile";
import { Section } from "./Section";

export function EducationSection() {
  const { education } = profile;

  return (
    <Section id="education" label="$ cat education.log" title="Education">
      <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-teal-300/35 hover:shadow-[0_0_22px_rgba(20,184,166,0.08)] sm:p-6">
        <p className="font-mono text-sm text-teal-300">
          expected graduation: {education.expectedGraduation}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-slate-50">
          {education.school}
        </h3>
        <p className="mt-2 text-slate-300">{education.degree}</p>
        <div className="mt-6">
          <h4 className="font-mono text-sm text-amber-200">Coursework</h4>
          <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded border border-slate-800 bg-slate-900/40 px-3 py-2"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
