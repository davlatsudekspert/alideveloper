import { useEffect, useState } from "react";
import { Send, ArrowUp, X } from "lucide-react";
import AiChat from "./AiChat";
import { useLang } from "../i18n";

export default function FloatingContact() {
  const { t } = useLang();
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AiChat open={chatOpen} onClose={() => setChatOpen(false)} />
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        <a
          href="#top"
          aria-label={t("float.top")}
          className={`w-11 h-11 rounded-full bg-ink2 text-paper ring-1 ring-white/10 flex items-center justify-center shadow-lg transition-all duration-300 ${
            showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          } hover:text-sky`}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </a>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label={t("float.chat")}
          className="relative w-14 h-14 rounded-full bg-sky text-ink flex items-center justify-center shadow-xl shadow-sky/30 hover:bg-white transition-colors"
        >
          {!chatOpen && <span className="absolute inset-0 rounded-full bg-sky animate-ping opacity-40" />}
          {chatOpen ? <X size={20} strokeWidth={2} /> : <Send size={20} strokeWidth={2} className="relative" />}
        </button>
      </div>
    </>
  );
}
