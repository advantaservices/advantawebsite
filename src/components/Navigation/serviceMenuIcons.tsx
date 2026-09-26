import {
  Bell,
  Cable,
  Cctv,
  CircuitBoard,
  ClipboardCheck,
  Fan,
  Hammer,
  Lightbulb,
  Plug,
  PlugZap,
  RefreshCw,
  Search,
  ShieldCheck,
  Snowflake,
  Warehouse,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "/electrical/rewires": Cable,
  "/electrical/fuseboards": Zap,
  "/electrical/eicr": ShieldCheck,
  "/electrical/lighting": Lightbulb,
  "/electrical/ev-charging": PlugZap,
  "/electrical/installations": Wrench,
  "/electrical/sockets": Plug,
  "/electrical/three-phase": CircuitBoard,
  "/electrical/fault-finding": Search,
  "/electrical/outbuildings": Warehouse,
  "/electrical/pat-testing": ClipboardCheck,
  "/electrical/alarms": Bell,
  "/electrical/cctv": Cctv,
  "/air-conditioning/installations": Snowflake,
  "/air-conditioning/servicing": Fan,
  "/air-conditioning/repairs": Hammer,
  "/air-conditioning/replacements": RefreshCw,
};

export function ServiceMenuIcon({ href }: { href: string }) {
  const Icon = SERVICE_ICONS[href] ?? Wrench;

  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-brand-strong">
      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
    </span>
  );
}
