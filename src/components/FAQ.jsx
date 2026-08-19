import { useState } from "react";
import { Plus } from "lucide-react";
import { useLang } from "../i18n";

const items = [1, 2, 3, 4, 5];

export default function FAQ() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="savollar" className="py-16 px-4 sm:py-24 sm:px-6 bg-paper">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("faq.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-10">
          {t("faq.title")}
        </h2>

        <div className="space-y-3">
          {items.map((n, i) => {
            const open = openIdx === i;
            return (
              <div key={n} className="rounded-xl bg-white ring-1 ring-paper2 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display font-medium text-ink text-sm sm:text-base">{t(`faq.${n}.q`)}</span>
                  <Plus
                    size={18}
                    className={`text-sky shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-muted text-sm leading-relaxed">{t(`faq.${n}.a`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
