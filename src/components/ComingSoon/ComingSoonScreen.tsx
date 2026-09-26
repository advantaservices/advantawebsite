import { AdvantaLogo } from "@/components/Brand/AdvantaLogo";

export function ComingSoonScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-viewer px-6 text-center">
      <div className="space-y-6">
        <AdvantaLogo width={280} variant="dark" priority className="mx-auto" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-dark-muted md:text-base">
          Coming soon
        </p>
      </div>
    </main>
  );
}
