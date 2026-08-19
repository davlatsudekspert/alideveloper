import { Clock, RotateCcw, ShieldCheck } from "lucide-react";
import { useLang } from "../i18n";

const items = [
  { icon: Clock, titleKey: "trust.1.title", descKey: "trust.1.desc" },
  { icon: RotateCcw, titleKey: "trust.2.title", descKey: "trust.2.desc" },
  { icon: ShieldCheck, titleKey: "trust.3.title", descKey: "trust.3.desc" },
];

export default function TrustBar() {
  const { t } = useLang();
  return (
    <div className="mt-12 sm:mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto py-8 grid sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.titleKey} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky/10 text-sky flex items-center justify-center shrink-0">
              <item.icon size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-paper">{t(item.titleKey)}</p>
              <p className="text-paper/50 text-xs">{t(item.descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
