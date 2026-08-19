import Reveal from "./Reveal";
import { useLang } from "../i18n";

const steps = ["1", "2", "3", "4"];

export default function Process() {
  const { t } = useLang();
  return (
    <section id="jarayon" className="py-16 px-4 sm:py-24 sm:px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("process.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 max-w-xl">
          {t("process.title")}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((n, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 bottom-0 w-px bg-white/10 hidden md:block" />
                <span className="font-mono text-sky text-sm">0{n}</span>
                <h3 className="font-display font-semibold text-lg mt-2 mb-2">{t(`process.${n}.title`)}</h3>
                <p className="text-paper/60 text-sm">{t(`process.${n}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
