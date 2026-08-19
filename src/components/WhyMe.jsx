import { Wallet, MessageCircle, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "../i18n";

const points = [
  { icon: Wallet, titleKey: "whyme.1.title", descKey: "whyme.1.desc" },
  { icon: MessageCircle, titleKey: "whyme.2.title", descKey: "whyme.2.desc" },
  { icon: Zap, titleKey: "whyme.3.title", descKey: "whyme.3.desc" },
];

export default function WhyMe() {
  const { t } = useLang();
  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("whyme.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-12 max-w-xl">
          {t("whyme.title")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.titleKey} delay={i * 100}>
              <div className="rounded-2xl bg-white ring-1 ring-paper2 p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-sky/10 text-sky flex items-center justify-center mb-4">
                  <p.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{t(p.titleKey)}</h3>
                <p className="text-muted text-sm leading-relaxed">{t(p.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
