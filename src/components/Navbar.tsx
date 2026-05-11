import { MobileMenu } from "./MobileMenu";
import { withBasePath } from "@/lib/paths";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-teal-300 transition hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          abdul@portfolio:~$
        </a>

        {/* Desktop nav — hidden below md */}
        <div className="hidden items-center gap-x-4 gap-y-2 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm py-1 transition hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              {item.label}
            </a>
          ))}
          <a
            href={withBasePath("/resume.pdf")}
            className="rounded-md border border-blue-400/50 px-3 py-1.5 font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-400/10 hover:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger menu — visible only below md */}
        <MobileMenu />
      </nav>
    </header>
  );
}
