import { Send, Phone } from "lucide-react";
import { TELEGRAM_USERNAME, PHONE, PHONE_HREF, WORK_HOURS } from "../constants";
import { useLang } from "../i18n";

const links = [
  { href: "#xizmatlar", labelKey: "nav.services" },
  { href: "#jarayon", labelKey: "nav.process" },
  { href: "#loyihalar", labelKey: "nav.portfolio" },
  { href: "#savollar", labelKey: "nav.faq" },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="pt-16 pb-8 px-4 sm:px-6 bg-ink border-t border-white/10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-12">
        <div>
          <span className="font-display font-semibold text-paper text-lg">
            Ali<span className="text-sky">.dev</span>
          </span>
          <p className="text-paper/50 text-sm mt-3 max-w-xs">{t("footer.desc")}</p>
        </div>
        <div>
          <p className="font-mono text-xs text-paper/40 mb-3">{t("footer.nav")}</p>
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-paper/60 text-sm hover:text-sky transition-colors">
                {t(l.labelKey)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs text-paper/40 mb-3">{t("footer.contact")}</p>
          <div className="flex flex-col gap-2">
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-paper/60 text-sm hover:text-sky transition-colors"
            >
              <Send size={14} /> @{TELEGRAM_USERNAME}
            </a>
            <a href={`tel:${PHONE_HREF}`} className="flex items-center gap-2 text-paper/60 text-sm hover:text-sky transition-colors">
              <Phone size={14} /> {PHONE}
            </a>
            <p className="text-paper/40 text-xs mt-1">{WORK_HOURS}</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-paper/40 text-xs">{t("footer.rights").replace("{year}", year)}</span>
        <span className="font-mono text-paper/30 text-xs">React · Vite · Tailwind CSS</span>
      </div>
    </footer>
  );
}
