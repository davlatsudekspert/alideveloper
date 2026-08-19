import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "../i18n";

const links = [
  { href: "#xizmatlar", labelKey: "nav.services" },
  { href: "#hisoblash", labelKey: "nav.calc" },
  { href: "#jarayon", labelKey: "nav.process" },
  { href: "#loyihalar", labelKey: "nav.portfolio" },
  { href: "#aloqa", labelKey: "nav.contact" },
];

export default function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-white/10 shadow-lg shadow-black/20" : "border-transparent"
      }`}
    >
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-sky focus:text-ink focus:px-4 focus:py-2 focus:rounded"
      >
        {t("header.skip")}
      </a>      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="font-display font-semibold text-paper text-lg tracking-tight">
          Ali<span className="text-sky">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors ${active === l.href ? "text-sky" : "text-paper/70 hover:text-sky"}`}
            >
              {t(l.labelKey)}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#aloqa"
            className="bg-sky text-ink font-mono text-sm font-medium px-4 py-2 rounded hover:bg-white transition-colors"
          >
            {t("header.order")}
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-paper w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label={t("header.menu")}          aria-expanded={open}
        >
          <span className={`block w-6 h-px bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-4 sm:px-6 pb-6 font-mono text-sm text-paper/80 bg-ink border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 transition-colors ${active === l.href ? "text-sky" : "hover:text-sky"}`}
            >
              {t(l.labelKey)}
            </a>
          ))}
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <a
            href="#aloqa"
            onClick={() => setOpen(false)}
            className="mt-2 bg-sky text-ink text-center font-medium px-4 py-3 rounded"
          >
            {t("header.order")}
          </a>
        </nav>
      )}
    </header>
  );
}
