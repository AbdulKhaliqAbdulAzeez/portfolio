import type { Project } from "@/types/profile";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.category !== "supporting";

  return (
    <article
      className={`rounded-lg border bg-slate-950/75 p-5 shadow-xl shadow-black/20 transition hover:shadow-[0_0_26px_rgba(59,130,246,0.09)] sm:p-6 ${
        isFeatured
          ? "border-blue-400/30 hover:border-blue-400/60"
          : "border-slate-800 hover:border-teal-300/50"
      }`}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex rounded border border-amber-200/30 bg-amber-200/5 px-2.5 py-1 font-mono text-xs uppercase tracking-normal text-amber-100">
            {project.courseLabel}
          </p>
          <h3 className="text-xl font-semibold text-slate-50">{project.name}</h3>
          <p className="mt-2 leading-7 text-slate-400">{project.description}</p>
        </div>
        <div className="min-w-64 rounded-md border border-teal-300/20 bg-slate-900/60 p-4 font-mono text-xs text-slate-300">
          {Object.entries(project.status).map(([key, value]) => (
            <p key={key}>
              <span className="text-teal-300">{key}:</span> {value}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-md border border-blue-400/20 bg-blue-400/10 p-4">
        <h4 className="font-mono text-sm text-blue-200">Cloud Engineering Relevance</h4>
        <p className="mt-2 text-sm leading-6 text-slate-300">{project.cloudRelevance}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 font-mono text-xs text-blue-100"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <InfoBlock title="Problem" text={project.problem} />
        <InfoBlock title="What I Built" text={project.built} />
        <div>
          <h4 className="font-mono text-sm text-amber-200">Intentional Decisions</h4>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-300">
            {project.decisions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-sm text-amber-200">Security Decisions</h4>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-300">
            {project.security.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <InfoBlock title="What I Learned" text={project.learned} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-100 transition hover:border-teal-300 hover:bg-teal-400/10 hover:text-teal-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="font-mono text-sm text-amber-200">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
