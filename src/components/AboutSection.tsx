import { profile } from "@/data/profile";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      label="$ cat professional-direction.md"
      title="Professional Direction"
      description={profile.targetWorkStatement}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-blue-400/35 hover:shadow-[0_0_22px_rgba(59,130,246,0.08)] md:col-span-2">
          <p className="leading-8 text-slate-300">{profile.summary}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {profile.cloudFocus.map((focus) => (
              <div
                key={focus}
                className="rounded border border-blue-400/20 bg-blue-400/10 px-3 py-2 font-mono text-xs text-blue-100"
              >
                {focus}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-amber-300/35 hover:shadow-[0_0_22px_rgba(245,158,11,0.08)]">
          <p className="font-mono text-sm text-amber-200">portfolio audience</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Location</dt>
              <dd className="text-slate-100">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Target Role</dt>
              <dd className="text-slate-100">Cloud engineering intern</dd>
            </div>
            <div>
              <dt className="text-slate-500">Audience</dt>
              <dd className="text-slate-100">{profile.targetAudience}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-5 rounded-lg border border-blue-400/20 bg-slate-950/60 p-5">
        <p className="font-mono text-sm text-blue-300">visual/style direction</p>
        <p className="mt-3 leading-7 text-slate-300">{profile.visualDirection}</p>
      </div>
    </Section>
  );
}
