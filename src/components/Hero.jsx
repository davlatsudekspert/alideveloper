import Inspector from "./Inspector";
import TrustBar from "./TrustBar";
import Reveal from "./Reveal";
import { AVAILABLE } from "../constants";
import { useLang } from "../i18n";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="pt-32 pb-16 px-4 sm:pt-40 sm:pb-24 sm:px-6 bg-ink text-paper overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <Reveal>
        <div>
          {AVAILABLE && (
            <span className="inline-flex items-center gap-2 font-mono text-xs text-paper/70 border border-white/10 rounded-full px-3 py-1.5 mb-5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-sky animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-sky" />
              </span>
              {t("hero.available")}
            </span>
          )}
          <p className="font-mono text-sky text-sm mb-4">{t("hero.tag")}</p>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.1] mb-6">
            {t("hero.title1")} <span className="text-sky">{t("hero.title2")}</span> {t("hero.title3")}
          </h1>
          <p className="text-paper/70 text-base sm:text-lg mb-8 max-w-md">
            {t("hero.sub")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#aloqa"
              className="bg-sky text-ink font-mono text-sm font-medium px-6 py-3 rounded hover:bg-white transition-colors"
            >
              {t("hero.order")}
            </a>
            <a
              href="#xizmatlar"
              className="border border-white/20 text-paper font-mono text-sm px-6 py-3 rounded hover:border-sky hover:text-sky transition-colors"
            >
              {t("hero.prices")}
            </a>
          </div>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <Inspector label="<Hero />" dims="1440 × 900" className="mt-6 md:mt-0">
          <div className="rounded-lg border border-white/10 bg-ink2 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-[11px] text-muted">mijoz-sayti.uz</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="h-3 w-24 bg-sky/40 rounded" />
              <div className="h-6 w-3/4 bg-paper/20 rounded" />
              <div className="h-3 w-full bg-paper/10 rounded" />
              <div className="h-3 w-5/6 bg-paper/10 rounded" />
              <div className="flex gap-3 pt-2">
                <div className="h-9 w-28 bg-sky rounded" />
                <div className="h-9 w-28 border border-white/20 rounded" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-6">
                <div className="h-16 bg-paper/5 border border-white/10 rounded" />
                <div className="h-16 bg-paper/5 border border-white/10 rounded" />
                <div className="h-16 bg-paper/5 border border-white/10 rounded" />
              </div>
            </div>
          </div>
        </Inspector>
        </Reveal>
      </div>
      <TrustBar />
    </section>
  );
}
