import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 {profile.name}</p>
        <p className="font-mono text-slate-500">system status: available</p>
      </div>
    </footer>
  );
}
