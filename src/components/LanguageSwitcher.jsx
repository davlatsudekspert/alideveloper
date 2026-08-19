import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLang } from "../i18n";

const languages = [
  { code: "uz", label: "O'zbekcha" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher({ variant = "dark" }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const current = languages.find((l) => l.code === lang) || languages[0];
  const light = variant === "light";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 font-mono text-sm px-2.5 py-1.5 rounded transition-colors ${
          light ? "text-ink/70 hover:text-sky" : "text-paper/70 hover:text-sky"
        }`}
      >
        <Globe size={15} strokeWidth={1.75} />
        {current.code.toUpperCase()}
        <ChevronDown size={13} strokeWidth={2} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-ink ring-1 ring-white/10 shadow-xl overflow-hidden z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-mono transition-colors ${
                l.code === lang ? "text-sky bg-white/5" : "text-paper/70 hover:text-sky hover:bg-white/5"
              }`}
            >
              {l.label}
              <span className="text-xs text-paper/40">{l.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
