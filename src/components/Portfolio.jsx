import Reveal from "./Reveal";
import { useLang } from "../i18n";

const slots = ["01", "02", "03"];

export default function Portfolio() {
  const { t } = useLang();
  return (
    <section id="loyihalar" className="py-16 px-4 sm:py-24 sm:px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("portfolio.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 max-w-xl">
          {t("portfolio.title")}
        </h2>
        <p className="text-muted max-w-xl mb-12">{t("portfolio.sub")}</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {slots.map((n, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="aspect-[4/3] rounded-lg border-2 border-dashed border-paper2 bg-white flex flex-col items-center justify-center gap-2">
                <span className="font-mono text-xs text-muted">{t("portfolio.file")}-{n}.jsx</span>
                <span className="text-muted text-sm">{t("portfolio.empty")}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
