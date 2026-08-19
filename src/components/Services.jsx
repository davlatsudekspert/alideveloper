import { Rocket, Layers, PenTool, LayoutDashboard, Check, ArrowRight, Clock } from "lucide-react";
import { packages, addons } from "../data";
import Reveal from "./Reveal";
import { useLang } from "../i18n";

const icons = { rocket: Rocket, layers: Layers, pen: PenTool, dashboard: LayoutDashboard };

function formatPrice(n, t) {
  if (n < 1000000) return (n / 1000).toLocaleString("uz-UZ") + " " + t("money.thousand");
  return (n / 1000000).toLocaleString("uz-UZ", { maximumFractionDigits: 1 }) + " " + t("money.million");
}

function Card({ pkg, t }) {
  const Icon = icons[pkg.icon];
  return (
    <div
      className={`group relative rounded-2xl p-8 transition-all ${
        pkg.featured
          ? "bg-ink text-paper ring-1 ring-sky/50 shadow-xl shadow-sky/10"
          : "bg-white text-ink ring-1 ring-paper2 hover:ring-sky/40 hover:-translate-y-1"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-8 bg-sky text-ink font-mono text-[11px] font-medium px-3 py-1 rounded-full">
          {t("services.featured")}
        </span>
      )}

      <div className="flex items-center justify-between mb-6">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            pkg.featured ? "bg-sky/15 text-sky" : "bg-sky/10 text-sky"
          }`}
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <span
          className={`flex items-center gap-1.5 font-mono text-[11px] ${
            pkg.featured ? "text-paper/50" : "text-muted"
          }`}
        >
          <Clock size={13} strokeWidth={2} />
          {t(`pkg.${pkg.id}.days`)}
        </span>
      </div>

      <h3 className="font-display font-semibold text-xl mb-2">{t(`pkg.${pkg.id}.title`)}</h3>
      <p className={`text-sm mb-6 leading-relaxed ${pkg.featured ? "text-paper/60" : "text-muted"}`}>
        {t(`pkg.${pkg.id}.desc`)}
      </p>

      <ul className="space-y-2.5 mb-8">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm">
            <Check size={15} className="text-sky shrink-0" strokeWidth={2.5} />
            <span className={pkg.featured ? "text-paper/80" : "text-ink/70"}>{t(`pkg.${pkg.id}.props.${i}`)}</span>
          </li>
        ))}
      </ul>

      <div className={`flex items-end justify-between pt-6 border-t ${pkg.featured ? "border-white/10" : "border-paper2"}`}>
        <div>
          <p className={`font-mono text-[11px] mb-1 ${pkg.featured ? "text-paper/40" : "text-muted"}`}>
            {t("services.from")}
          </p>
          <p className="font-display font-semibold text-2xl">{formatPrice(pkg.price, t)}</p>
        </div>
        <a
          href="#hisoblash"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            pkg.featured ? "bg-sky text-ink" : "bg-paper text-ink group-hover:bg-sky group-hover:text-ink"
          }`}
        >
          <ArrowRight size={16} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLang();
  return (
    <section id="xizmatlar" className="py-16 px-4 sm:py-24 sm:px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("services.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 max-w-xl">
          {t("services.title")}
        </h2>
        <p className="text-muted max-w-xl mb-12">{t("services.sub")}</p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 100}>
              <Card pkg={pkg} t={t} />
            </Reveal>
          ))}
        </div>

        <div className="rounded-2xl bg-white ring-1 ring-paper2 p-6 md:p-8">
          <p className="font-mono text-xs text-muted mb-4">{t("services.addons")}</p>
          <div className="divide-y divide-paper2">
            {addons.map((a) => (
              <div key={a.id} className="flex items-center justify-between py-3">
                <span className="text-sm text-ink/80">{t(`addon.${a.id}`)}</span>
                <span className="font-mono text-sm text-sky">+{formatPrice(a.price, t)}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-ink/80">{t("services.rush")}</span>
              <span className="font-mono text-sm text-sky">+25%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
